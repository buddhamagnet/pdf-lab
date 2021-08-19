import { ArticleResponse, Metadata } from "./types";
import * as faker from "faker";

const article: ArticleResponse = {
  plain: faker.lorem.paragraphs(10, " "),
  html: "ELIDED",
  image: {
    main: {
      type: ["MediaObject", "ImageObject"],
      url: {
        canonical: "https://www.economist.com/decimate",
      },
    },
    inline: [
      {
        type: ["MediaObject", "ImageObject"],
        url: {
          canonical: "https://www.economist.com/decimate",
        },
      },
    ],
  },
};

const metadata: Metadata = {
  dateFn: () => {},
  articleSection: "Special report",
  channel: "j53t6hsedat4l7rkbb1le98u73262sh5",
  title: {
    article: "A bright future for the world of work",
    print: "Labour gains",
  },
  byline: "",
  subheadline: "Subheadline",
  client: "proquest",
  contentSlice: "articles",
  copyrightHolder: "",
  copyrightYear: 2021,
  dateCreated: "2021-04-01T11:41:36Z",
  dateModified: "2021-04-08T16:53:26Z",
  datePublished: "2021-04-08T14:48:55Z",
  description:
    "Workers the world over have had a torrid year. But the future is bright, argues Callum Williams",
  issue: {
    volumeNumber: "1",
    issueNumber: "9",
    title: "Riding high: A special report on the future of work",
    datePublished: faker.date.past().toISOString(),
  },
  tegID: "pcoe1tl7fvui43ljca6iq9o2mrsiodro",
};

export const metadataBuilder = (
  overridingProperties?: Partial<Metadata>
): Metadata => ({
  ...metadata,
  ...overridingProperties,
});

export const articleBuilder = (
  overridingProperties?: Partial<ArticleResponse>
): ArticleResponse => ({
  ...article,
  ...overridingProperties,
});
