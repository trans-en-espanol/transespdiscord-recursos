import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

export const onRequest = defineRouteMiddleware(async (context) => {
  const { head } = (context.locals as App.Locals).starlightRoute;
  const title = head.find(({ tag }) => tag == "title")?.content;
  const ogTitle = head.find(
    ({ tag, attrs }) => tag == "meta" && attrs?.property == "og:title",
  );
  if (title && ogTitle?.attrs) ogTitle.attrs.content = title;
});
