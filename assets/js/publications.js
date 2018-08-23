const publications = new Vue({
  el: '#publications',
  data: {
    show: false,
    pubs: [
        {
            key: 0,
            title: "Simulating Illumina metagenomic data with InSilicoSeq",
            author: "Hadrien Gourlé",
            year: 2018,
            journal: "Bioinformatics",
            doi: "10.1093/bioinformatics/bty630"
        },
        {
            key: 1,
            title: "A year in the life of a thrombolite: comparative metatranscriptomics reveals dynamic metabolic changes over diel and seasonal cycles.",
            author: "Louyakis A.",
            year: 2018,
            journal: "Environmental microbiology",
            doi: "10.1111/1462-2920.14029"
        },
        {
            key: 2,
            title: "The eBioKit, a stand-alone educational platform for bioinformatics.",
            author: "Hernández-de-Diego R.",
            year: 2017,
            journal: "PLoS computational biology",
            doi: "10.1371/journal.pcbi.1005616"
        },
        {
            key: 3,
            title: "MetLab: An In Silico Experimental Design, Simulation and Analysis Tool for Viral Metagenomics Studies.",
            author: "Norling M.",
            year: 2016,
            journal: "PloS one",
            doi: "10.1371/journal.pone.0160334"
        },
        {
            key: 4,
            title: "Complete genome sequence of Staphylococcus aureus, strain ILRI_Eymole1/1, isolated from a Kenyan dromedary camel.",
            author: "Zubair S.",
            year: 2015,
            journal: "Standards in genomic sciences",
            doi: "10.1186/s40793-015-0098-6"
        }
    ]
  }
});
