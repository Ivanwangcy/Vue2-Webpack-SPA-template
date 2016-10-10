<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>

    <nav-footer></nav-footer>
  </div>
</template>
<script type="text/javascript">
  import navFooter from './components/NavFooter.vue'

  export default {
    components: {
      navFooter
    }
  }
</script>

<style lang="sass">
  @import "./style.scss"
</style>
