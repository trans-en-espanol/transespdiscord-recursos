const repository = "https://github.com/trans-en-espanol/transespdiscord-recursos";

window.$docsify = {
    name: "Trans en Español - Recursos",
    repo: repository,
    logo: "assets/img/logo.webp",
    homepage: "pages/inicio.md",
    coverpage: false,
    loadSidebar: "pages/_sidebar.md",
    //autoHeader: true,
    subMaxLevel: 3,
    toc: {
        scope: '.markdown-section',
        headings: 'h1, h2, h3, h4, h5, h6',
        title: 'Índice',
    },
    search: {
        placeholder: "Escribe aquí para buscar",
        noData: "Sin resultados."
    },
    plugins: [
        EditOnGithubPlugin.create(
            repository + "/tree/main/docs/",
            null,
            "Editar esta página"
        )
    ]
}
