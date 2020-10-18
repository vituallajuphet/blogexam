<template>
  <div id="apps">
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <preloader />
  </div>
</template>

<script>
import preloader from "@/components/includes/Preloader";
export default {
  name: "App",
  components: {
    preloader,
  },
};
</script>


<style scoped>
</style>