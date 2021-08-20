import PDFDocument from 'pdfkit';
import { AgreggatedData } from './types';
import { articleBuilder, metadataBuilder } from './builders';
import fs from 'fs';

const sanitize = (input: string) => input.replace('■', '');

const createPDF = async (data: AgreggatedData) => {
  const { articleSection, issue, plain, subheadline, title } = data;

  let doc = new PDFDocument();
  doc.pipe(fs.createWriteStream('output.pdf'));

  const x = 100;
  const y = 50;
  const fontSize = 13;

  doc
    .fontSize(fontSize - 3)
    .text(`${articleSection} ${issue.issueNumber}`, x + 300, y)
    .fontSize(fontSize + 2)
    .text(title.print || title.article, x, y)
    .fontSize(fontSize)
    .text(subheadline, x, y + 20)
    .moveDown()
    .fontSize(fontSize)
    .text(sanitize(plain), {
      width: 412,
      align: 'justify',
      indent: 30,
      columns: 2,
      ellipsis: true,
    });

  doc.end();
};

const toPDF = async (data: AgreggatedData) => {
  createPDF(data);
};

const pdf = async () => {
  await toPDF({
    ...metadataBuilder({
      title: {
        article: 'A bright future for the world of work',
        print: 'Labour gains',
      },
    }),
    ...articleBuilder(),
  });
};

pdf();
