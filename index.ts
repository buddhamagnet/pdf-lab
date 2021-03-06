import {
  PDFDocument,
  StandardFonts,
  TextAlignment,
  layoutMultilineText,
  rgb,
  RGB,
  ColorTypes,
} from 'pdf-lib';
import { AgreggatedData } from './types';
import { articleBuilder, metadataBuilder } from './builders';
import fs from 'fs';

type LayoutOptions = {
  height: number;
  width: number;
  font: {
    size: number;
    colours: { [key: string]: RGB };
  };
};

const sanitize = (input: string) => input.replace('■', '');

const generateLayout = (data: AgreggatedData, options: LayoutOptions) => {
  const { articleSection, title, subheadline, issue } = data;
  const { height, width, font } = options;
  const { size: fontSize, colours } = font;

  return {
    firstDraw: { x: 50, y: height - 4 * fontSize, color: colours.red },
    textPositions: [
      {
        name: 'section',
        text: articleSection,
        height: 1,
        supplementary: { x: width - 140, size: 10 },
      },
      {
        name: 'issue',
        text: issue.issueNumber,
        height: 1,
        supplementary: { x: width - 80, size: 10 },
      },
      { name: 'headline', text: title.print || title.article, height: 5 },
      { name: 'subheadline', text: subheadline, height: 7 },
      // Here we will need to do some work to deterine wrapping and line breaks
      // see https://github.com/Hopding/pdf-lib/issues/72
    ],
  };
};

const createPDF = async (data: AgreggatedData): Promise<PDFDocument> => {
  const { plain, title } = data;

  const pdfDoc = await PDFDocument.create();
  pdfDoc.setTitle(title.print || title.article);
  pdfDoc.setAuthor('The Economist');

  // Set up fonts and defaults.
  const size = 20;

  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  // Add page and get props from it.
  const page = pdfDoc.addPage();
  const { height, width } = page.getSize();
  const colours = {
    black: rgb(0, 0, 0),
    red: rgb(1.0, 0, 0),
  };
  // Text drawing structure is created in isolation as it needs to embed the font
  // in the PDF document so is no good for code re-use or testing from a pure
  // layout perspective.
  const textDraw = { size, font: timesRomanFont, color: colours.black };

  const { firstDraw, textPositions } = generateLayout(data, {
    height,
    width,
    font: { size, colours },
  });

  textPositions.forEach((element) =>
    page.drawText(element.text, {
      ...firstDraw,
      ...textDraw,
      y: height - element.height * size,
      ...element.supplementary,
    })
  );

  const text = { name: 'text', text: sanitize(plain), height: 10 };

  const multiText = layoutMultilineText(text.text, {
    alignment: TextAlignment.Left,
    font: timesRomanFont,
    fontSize: size,
    bounds: { width: width - 100, height: 10000, x: width - 100, y: 10000 },
  });

  let startingPositon = 0;

  for (let i = 0; i < multiText.lines.length; i++) {
    if (startingPositon < 50) {
      let page = pdfDoc.addPage();
      page.setFont(timesRomanFont);
      // reset starting position
      startingPositon = height - 100;
    }
    page.drawText(`${multiText.lines[i].text}`, {
      x: 100,
      y: startingPositon,
      size,
      maxWidth: width - 100,
      color: colours.black,
      font: timesRomanFont,
    });
    // move position down
    startingPositon = startingPositon - 10;
  }

  return pdfDoc;
};

const toPDF = async (data: AgreggatedData): Promise<Buffer> => {
  const pdfDoc = await createPDF(data);
  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
};

const pdf = async () => {
  const data = await toPDF({
    ...metadataBuilder({
      title: {
        article: 'A bright future for the world of work',
        print: 'Labour gains',
      },
    }),
    ...articleBuilder(),
  });
  fs.writeFile('./test.pdf', data, () => {});
};

pdf();
