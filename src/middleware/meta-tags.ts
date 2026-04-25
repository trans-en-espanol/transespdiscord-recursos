import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

export const onRequest = defineRouteMiddleware(async (context, next) => {
  const { head, id } = (context.locals as App.Locals).starlightRoute;

  // Agregar nombre del sitio al final del título.

  const title = head.find(({ tag }) => tag == "title")?.content;
  const ogTitle = head.find(
    ({ tag, attrs }) => tag == "meta" && attrs?.property == "og:title",
  );
  if (title && ogTitle?.attrs) ogTitle.attrs.content = title;

  // Agregar imagen de Open Graph personalizada.

  const { SITE } = import.meta.env;

  const image = `${SITE}/open-graph/${id || "index"}.webp`;

  head.push(
    { tag: "meta", attrs: { property: "og:image", content: image } },
    { tag: "meta", attrs: { property: "twitter:image", content: image } },
  );
});
