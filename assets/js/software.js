const software = new Vue({
  el: '#software',
  data: {
    show: false,
    soft: [
        {
            key: 0,
            name: "InSilicoSeq",
            description: "A sequencing simulator",
            doi: "unpublished",
            repo: "https://github.com/HadrienG/InSilicoSeq",
            doc: "https://insilicoseq.readthedocs.io/en/latest/"
        },
        {
            key: 1,
            name: "taxadb",
            description: "Locally query the ncbi taxonomy",
            doi: "unpublished",
            repo: "https://github.com/HadrienG/taxadb",
            doc: "https://taxadb.readthedocs.io/en/latest/"
        },
        {
            key: 2,
            name: "nanoflow",
            description: "De novo assembly of nanopore reads using nextflow",
            doi: "unpublished",
            repo: "https://github.com/HadrienG/nanoflow",
            doc: "https://github.com/HadrienG/nanoflow"
        }
    ]
  }
});
