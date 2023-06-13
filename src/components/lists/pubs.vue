<script>
export default {
  data() {
    return {
      pubs: [
            {
              key: 0,
              title: "Simulating Illumina metagenomic data with InSilicoSeq",
              author: "Gourlé H.",
              year: 2018,
              journal: "Bioinformatics",
              doi: "10.1093/bioinformatics/bty630"
            },
            {
              key: 1,
              title: "A year in the life of a thrombolite: comparative metatranscriptomics reveals dynamic metabolic changes over diel and seasonal cycles",
              author: "Louyakis A.",
              year: 2018,
              journal: "Environmental microbiology",
              doi: "10.1111/1462-2920.14029"
            },
            {
              key: 2,
              title: "Ten-week follow-up of monkeypox case-patient, Sweden, 2022",
              author: "Pettke A.",
              year: 2022,
              journal: "Emerging infectious diseases",
              doi: "10.3201/eid2810.221107"
            },
            {
              key: 3,
              title: "nf-core/mag: a best-practice pipeline for metagenome hybrid assembly and binning",
              author: "Krakau S.",
              year: 2022,
              journal: "NAR Genomics and Bioinformatics",
              doi: "10.1093/nargab/lqac007"
            },
            {
              key: 4,
              title: "Contribution of rare whole-genome sequencing variants to plasma protein levels and the missing heritability",
              author: "Kierczak M.",
              year: 2022,
              journal: "Nature Communications",
              doi: "10.1038/s41467-022-30208-8"
            }
      ]
    }
  }
}
</script>

<template>
    <div id="publications">
        <ul class="fa-ul">
          <li v-for="pub in pubs">
              <span class="fa-li"><i class="fas fa-angle-right"></i></span>
              {{ pub.author }} <i>et al.</i> ({{pub.year}}). <a class="underline"
                  :href="'https://doi.org/' + pub.doi">{{ pub.title }}</a> <i>{{ pub.journal }}.</i> doi: <a
                  class="underline" :href="'https://doi.org/' + pub.doi">{{ pub.doi }}</a>
          </li>
        </ul>
      </div>
</template>

<style scoped>
#publications li {
    font-weight: 100;
    margin: 10px 0;
    text-align: left;
}
#publications p {
    margin: 0px 0;
}
</style>