const repository = "https://github.com/trans-en-espanol/transespdiscord-recursos";

window.$docsify = {
    name: "Trans en Español - Recursos",
    repo: repository,
    logo: "assets/img/logo.webp",
    auto2top: true,
    coverpage: false,
    loadSidebar: true,
    //autoHeader: true,
    subMaxLevel: 2,
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
