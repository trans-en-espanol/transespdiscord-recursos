import type { APIRoute, GetStaticPaths, GetStaticPathsItem } from "astro";
import { getCollection } from "astro:content";
import fs from "node:fs";
import path from "node:path";
import satori from "satori";
import sharp from "sharp";
import config from "virtual:starlight/user-config";
import { template } from "../../utils/open-graph-template";
import { emoji } from "../../utils/satori-emoji";

const titleFont = fs.readFileSync(
  path.resolve(
    "node_modules/@fontsource/noto-sans/files/noto-sans-latin-800-normal.woff",
  ),
);
const descriptionFont = fs.readFileSync(
  path.resolve(
    "node_modules/@fontsource/noto-sans/files/noto-sans-latin-500-normal.woff",
  ),
);

export const GET = (async ({ props: { title, description } }) => {
  return new Response(
    new Uint8Array(
      await sharp(
        Buffer.from(
          await satori(template(title, description), {
            width: 1200,
            height: 630,
            fonts: [
              { name: "Title", data: titleFont },
              { name: "Description", data: descriptionFont },
            ],
            loadAdditionalAsset: async (languageCode, segment) => {
              if (languageCode === "emoji") return await emoji(segment);
              return segment;
            },
          }),
        ),
      )
        .png({ quality: 100 })
        .toBuffer(),
    ),
  );
}) satisfies APIRoute;

export const getStaticPaths = (async () => {
  return await (
    await getCollection("docs")
  ).map(
    ({ id, data: { title, description } }): GetStaticPathsItem => ({
      params: { route: `${id}.png` },
      props: {
        title: title || config.title,
        description: (description || config.description)
          ?.split(".")[0]
          .concat("."),
      },
    }),
  );
}) satisfies GetStaticPaths;
