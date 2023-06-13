<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>

<template>
  <div>
    <h2 @click="show = !show">
      <slot name="heading"></slot>
    </h2>
    <transition name="fade">
      <p v-if="show">
        <slot name="content"></slot>
      </p>
    </transition>
    <slot></slot>
  </div>
</template>

<style scoped>
h2 {
    font-family: 'Mina', sans-serif;
    text-align: left;
    cursor: pointer;
    color: #000;
}
h2:hover {
    color: #7d013e;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media (min-width: 1024px) {

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
