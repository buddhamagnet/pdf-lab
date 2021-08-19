import * as z from 'zod';

// TODO: move into it's own NPM module, so other apps can use this? Could possibly tighten types down; but value?
const metadataSchema = z.object({
  id: z.string().optional(),
  dateFn: z.function().optional(),
  articleSection: z.string(),
  channel: z.string(),
  title: z.object({
    article: z.string(),
    print: z.string().optional(),
  }),
  byline: z.string(),
  subheadline: z.string(),
  client: z.string(),
  contentSlice: z.string(),
  copyrightHolder: z.string(),
  copyrightYear: z.number(),
  dateCreated: z.string(),
  dateModified: z.string(),
  datePublished: z.string(),
  description: z.string(),
  issue: z.object({
    issueNumber: z.string(),
    volumeNumber: z.string(),
    title: z.string(),
    datePublished: z.string(),
  }),
  tegID: z.string(),
});

const image = z.object({
  type: z.array(z.string()),
  url: z.object({
    canonical: z.string(),
  }),
});

const imageSchema = z
  .object({
    main: image.nullable(),
    inline: z.array(image).nullable(),
  })
  .nullable();

const articleSchema = z.object({
  html: z.string(),
  plain: z.string(),
  image: imageSchema,
});

const cpArticleSchema = z.object({
  canonical: articleSchema,
});

type ArticleResponse = z.infer<typeof articleSchema>;
const articleParser = articleSchema.parse;
const cpArticleParser = cpArticleSchema.parse;

export {
  articleSchema,
  cpArticleSchema,
  ArticleResponse,
  articleParser,
  cpArticleParser,
};

export type Metadata = z.infer<typeof metadataSchema>;
export const metadataParser = metadataSchema.parse;
export type AgreggatedData = ArticleResponse & Metadata;
