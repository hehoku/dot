import { Client } from "@notionhq/client";

require("dotenv").config();

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

async function addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        "Project Name": {
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: text,
              },
            },
          ],
        },
        Type: {
          type: "select",
          select: {
            name: "tool",
            color: "red",
          },
        },
        Url: {
          type: "url",
          url: "https://test.com",
        },
      },
    });
    console.log(response);
    console.log("Success! Entry added.");
  } catch (error) {
    console.error(error.body);
  }
}

export default function handler(req, res) {
  addItem("test");
  res.status(200).json({ name: "John Doe" });
}
