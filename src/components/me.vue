<script setup>
import items from './items.vue'
import foot from './footer.vue'
</script>

<template>
  <img alt="Picture" src="https://avatars2.githubusercontent.com/u/7337110?s=400&u=33826be6e4bb340f888ede72cd89ac289ceae3fe&v=4&amp;s=460"/>
  <div>
    <p>
      Hi! I'm a postdoc in Bioinformatics in <a class="underline" 
      href="https://www.umu.se/forskning/grupper/laura-carroll-lab/">Laura Carroll</a>'s lab at
      <a class="underline" href="https://www.umu.se/">Umeå University</a> in Umeå, Sweden.
    </p>
    <p>
      The aim of my postdoctoral position is to develop and apply bioinformatics methods to improve
      our understanding of bacterial pathogens, their spread and evolution.
    </p>
    <p>
      I'm also currently employed at the <a class="underline"
      href="https://www.folkhalsomyndigheten.se/">Public Health Agency of Sweden</a>, where I
      oversee the design of analysis pipelines for whole genome sequencing data, and the automation
      platform on which the pipelines are running.
    </p>
    <p>
      Previously, I was a Postdoc in <a class="underline"
      href="https://www.katalog.uu.se/profile/?id=N1-979">Åsa Johansson</a>'s group at
      <a class="underline" href="https://www.uu.se/en">Uppsala University</a>, working on
      developping machine learning methods to predict complex diseases. Before that, I was a PhD
      student in <a class="underline" href="https://www.slu.se/en/ew-cv/erik-bongcam-rudloff/">
      Erik Bongcam</a>'s group at <a class="underline" href="https://www.slu.se/en/"></a> SLU,
      working on assessing the anthropogenic impact on West Indian Ocean coral reefs.
    </p>
    <p>
      I also have a great interest for open source software and open science, and am an instructor
      for <a class="underline" href="https://carpentries.org/">the Carpentries</a>.
    </p>
  </div>
  <items />
  <foot />
</template>

<style scoped>
</style>
