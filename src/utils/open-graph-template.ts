import fs from "node:fs";
import path from "node:path";

const logo = `data:image/svg+xml;base64,${fs.readFileSync(path.resolve("src/assets/logo-circular.svg")).toString("base64")}`;

export const template = (title: string, description: string) => ({
  type: "div",
  props: {
    style: {
      width: "100%",
      height: "100%",
      backgroundColor: "#1F1F23",
      display: "flex",
      flexDirection: "column",
    },
    children: [
      {
        type: "div",
        props: {
          style: {
            display: "flex",
            flex: 1,
            padding: "32px 64px",
            gap: "64px",
            alignItems: "center",
          },
          children: [
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  gap: "16px",
                },
                children: [
                  {
                    type: "div",
                    props: {
                      style: {
                        fontFamily: "Title",
                        fontSize: "56px",
                        color: "#E9E9EC",
                        lineHeight: 1.1,
                        textTransform: "uppercase",
                        textWrap: "balance",
                      },
                      children: title,
                    },
                  },
                  {
                    type: "div",
                    props: {
                      style: {
                        fontFamily: "Description",
                        fontSize: "48px",
                        color: "#E9E9ECBF",
                      },
                      children: description,
                    },
                  },
                ],
              },
            },
            {
              type: "img",
              props: {
                src: logo,
                style: { height: "448px", width: "448px" },
              },
            },
          ],
        },
      },
      {
        type: "div",
        props: {
          style: {
            background: "linear-gradient(to right, #5BCEFA, #F5A9B8)",
            height: "24px",
          },
        },
      },
    ],
  },
});
