// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidatorPlugin from "starlight-links-validator";
import { loadEnv } from "vite";

// @ts-ignore
const { SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    starlight({
      plugins: [starlightLinksValidatorPlugin()],
      title: "Trans en Español",
      description:
        "Repositorio de recursos del servidor de Discord Trans en Español. Gran cantidad de recursos útiles para la comunidad trans.",
      logo: {
        light: "./src/assets/logo-horizontal-claro.svg",
        dark: "./src/assets/logo-horizontal-oscuro.svg",
        alt: "Logo de Trans en Español",
        replacesTitle: true,
      },
      favicon: "favicon.svg",
      social: [
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/ktRkRKEAAD",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/trans-en-espanol",
        },
      ],
      locales: {
        root: {
          label: "Español",
          lang: "es",
        },
      },
      defaultLocale: "es",
      pagination: false,
      customCss: [
        "@fontsource/noto-sans/latin.css",
        "@fontsource/noto-sans/latin-italic.css",
        "./src/styles/custom.css",
      ],
      titleDelimiter: "-",
      routeMiddleware: "./src/middleware/meta-tags.ts",
      sidebar: [
        {
          label: "General",
          items: [{ slug: "" }, { slug: "contribuir" }, { slug: "glosario" }],
        },
        {
          label: "Transición",
          items: [{ autogenerate: { directory: "/transicion" } }],
        },
        {
          label: "Países",
          items: [{ autogenerate: { collapsed: true, directory: "/paises" } }],
        },
      ],
    }),
  ],
});
