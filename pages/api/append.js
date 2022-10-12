const { Client } = require("@notionhq/client");

require("dotenv").config();

const notion = new Client({ auth: process.env.NOTION_KEY });

const append = async () => {
  const blockId = "676980247b6643d28bdb95ad708a18aa";
  const response = await notion.blocks.children.append({
    block_id: blockId,
    children: [
      {
        object: "block",
        type: "paragraph",
        paragraph: {
          rich_text: [
            {
              type: "text",
              text: {
                content: "- Notion API Team",
                link: {
                  type: "url",
                  url: "https://twitter.com/NotionAPI",
                },
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
  append();
  res.status(200).json({ name: "John Doe" });
}
