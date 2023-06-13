<script>
export default {
  data() {
    return {
      software: [
                {
                  key: 0,
                  name: "InSilicoSeq",
                  description: "A sequencing simulator",
                  doi: "10.1093/bioinformatics/bty630",
                  repo: "https://github.com/HadrienG/InSilicoSeq",
                  doc: "https://insilicoseq.readthedocs.io/en/latest/"
                },
                {
                  key: 1,
                  name: "nf-core/mag",
                  description: "Assembly and binning of metagenomes",
                  doi: "10.1093/nargab/lqac007",
                  repo: "https://github.com/nf-core/mag",
                  doc: "https://nf-co.re/mag"
                },
                {
                  key: 2,
                  name: "taxadb",
                  description: "Locally query the ncbi taxonomy",
                  doi: "unpublished",
                  repo: "https://github.com/HadrienG/taxadb",
                  doc: "https://taxadb.readthedocs.io/en/latest/"
                }
        
      ]
    }
  }
}
</script>

<template>
  <div id="software">
    <ul class="fa-ul">
      <li v-for="s in software">
        <span class="fa-li"><i class="fas fa-angle-right"></i></span>
        <strong>{{ s.name }}:</strong> <i>{{ s.description }}</i>
        <a :href="s.repo">
          <span class="fab fa-github"></span>
        </a>
        <a :href="s.doc">
          <span class="fas fa-book"></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
#software li {
    font-weight: 100;
    margin: 10px 0;
    text-align: left;
}

#software a {
    padding-left: 10px;
}
</style>