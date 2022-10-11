const { Client } = require("@notionhq/client");

require("dotenv").config();

const notion = new Client({ auth: process.env.NOTION_KEY });

const createPage = async () => {
  const response = await notion.pages.create({
    parent: {
      page_id: "676980247b6643d28bdb95ad708a18aa",
    },
    properties: {
      title: {
        type: "title",
        title: [
          {
            type: "text",
            text: {
              content: "A note from your pals at Notion",
            },
          },
        ],
      },
    },
    children: [
      {
        object: "block",
        type: "paragraph",
        paragraph: {
          rich_text: [
            {
              type: "text",
              text: {
                content: "Grocery List",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "red",
              },
              plain_text: "Grocery List",
              href: null,
            },
          ],
        },
      },
    ],
  });
  console.log(response);
};

export default function handler(req, res) {
  createPage();
  res.status(200).json({ name: "John Doe" });
}
