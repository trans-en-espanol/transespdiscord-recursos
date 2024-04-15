const repository = "https://github.com/trans-en-espanol/transespdiscord-recursos";

window.$docsify = {
    name: "Trans en Español - Recursos",
    repo: repository,
    logo: "assets/img/logo.webp",
    homepage: "pages/inicio.md",
    auto2top: true,
    coverpage: false,
    loadSidebar: "pages/_sidebar.md",
    //autoHeader: true,
    subMaxLevel: 3,
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
