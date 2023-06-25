import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "d470a1b9-c6e4-4500-b386-196166e7dcf4", // Get this from tina.io
  token: "7f575d949eac05ff371e60e11780086f1038b70b", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "string",
            name: "url",
            label: "url",
            required: true,

          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: true,
          },
          {
            label: 'Categories',
            name: 'categories',
            type: 'string',
            list: true,
            options: [
              {
                value: 'Law',
                label: 'Law',
              },
              {
                value: 'Business Law',
                label: 'Business Law',
              },
              {
                value: 'Criminal Law',
                label: 'Criminal Law',
              },
              {
                value: 'Civil Law',
                label: 'Civil Law',
              },
              {
                value: 'Property Law',
                label: 'Property Law',
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "image",
            name: "image",
            label: "Cover Image",
            required: true,
          },
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: '49beff2a1caf9bdfa10c6db27e0efc94042f9be2',
      stopwordLanguages: ['eng']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },

});

