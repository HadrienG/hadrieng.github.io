<script>
export default {
  data() {
    return {
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
    }
  }
}
</script>

<template>
    <div id="footer">
        <ul>
            <li v-for="link in links">
                <a :href="link.web">
                    <span :class="link.icon"></span>
                </a>
            </li>
        </ul>
        <a href="#/license">
            <span class="far fa-copyright fa-flip-horizontal"></span> 2017-2018 Hadrien Gourlé
        </a>
    </div>
</template>

<style scoped>
#footer {
    margin-top: 50px;
    text-align: center;
}
#footer ul {
    padding: 0;
}
#footer li {
    display: inline;
    padding-left: 1em;
}
</style>
