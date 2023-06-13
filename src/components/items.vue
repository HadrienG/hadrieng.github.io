<script setup>
import item from './item.vue';
import publications from './lists/pubs.vue';
import software from './lists/software.vue';
</script>

<template>
  <item>
    <template #heading>Blog</template>
    <template #content>Coming soon!</template>
  </item>

  <item>
    <template #heading>Curriculum Vitae</template>
    <template #content>
      <div id="cv">
        <ul>
          <li>
            <a href="src/assets/pdf/hadrien_gourle_cv.pdf" target="_blank">
              <i class="far fa-file-pdf fa-3x"></i>
            </a>
          </li>
          <li>
            <a href="https://v2.overleaf.com/read/mkgfzbkbtrtj" target="_blank">
              <i class="far fa-file-code fa-3x"></i>
            </a>
          </li>
        </ul>
      </div>
    </template>
  </item>

  <item>
    <template #heading>Selected Publications</template>
    <template #content><publications/></template>
  </item>

  <item>
    <template #heading>Software</template>
    <template #content><software/></template>
  </item>

  <item>
    <template #heading>Course Materials</template>
    <template #content>
      <ul>
          <li>
            <a href="https://www.hadriengourle.com/tutorials" target="_blank">
              <span><i class="fas"></i>tutorials</span>
            </a>
          </li>
          <li>
            <a href="https://sgbc.github.io/course/" target="_blank">
              <span><i class="fas"></i>SGBC bioinformatics course</span>
            </a>
          </li>
        </ul>
    </template>
  </item>
</template>

<style scoped>
#cv {
    text-align: left;
}

#cv ul {
    padding: 0;
}
#cv li {
    display: inline;
    padding-left: 1em;
}
</style>