// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Trans en Español',
			logo:{
				light: './src/assets/logo-horizontal-claro.svg',
				dark: './src/assets/logo-horizontal-oscuro.svg',
				alt: 'Logo de Trans en Español',
				replacesTitle: true
			},
			favicon: 'favicon.svg',
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://servidor.transespdiscord.net' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/trans-en-espanol' }
			],
			locales: {
				root: {
					label: 'Español',
					lang: 'es'
				}
			},
			defaultLocale: 'es',
			pagination: false,
			sidebar: [
				{
					label: 'General',
					items: [
						{slug: ''},
						{slug: 'contribuir'},
						{slug: 'glosario'}
					]
				},
				{
					label: 'Países',					
					autogenerate: {
						collapsed:true,
						directory: '/paises'
					}
				},
				{
					label: 'Transición',
					autogenerate: {
						directory: '/transicion'
					}
				},
			],
		}),
	],
});
