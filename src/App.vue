<script setup>
import { ref, computed } from 'vue'
import me from './components/me.vue'
import license from './components/license.vue'

const routes = {
  '/': me,
  '/license': license
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <header>
  </header>

  <main>
    <h1>Hadrien Gourlé</h1>
    <!-- <me /> | <license /> -->
    <component :is="currentView" />
  </main>
</template>

<style>
img {
    width: 180px;
    float: left;
    padding-right: 1em;
    padding-bottom: 0.25em;
    opacity: 1;
    filter: none;
    filter: grayscale(20%);
}

.underline {
    border-bottom: 1px dotted #000;
    text-decoration: none;
}
.underline:hover {
    color: #7d013e;
}

h1 {
  font-family: 'Mina', sans-serif;
  text-align: center;
  padding-left: 1em;
}
</style>
