const footer = new Vue({
    el: "#footer",
    data: {
        links: [
            {
                key: 0,
                web: "https://github.com/HadrienG",
                icon: "fab fa-github"
            },
            {
                key: 1,
                web: "https://twitter.com/HGourle",
                icon: "fab fa-twitter"
            },
            {
                key: 2,
                web: "https://scholar.google.se/citations?user=EMEargQAAAAJ&hl=sv",
                icon: "fas fa-graduation-cap"
            },
            {
                key: 3,
                web: "https://orcid.org/0000-0001-9807-1082",
                icon: "fas fa-id-badge"
            },
            {
                key: 4,
                web: "https://osf.io/w5yju/",
                icon: "fas fa-flask"
            }
        ]
    },
});
