<template>
  <div>
    <appheader />
    <appbanner />
    <appcontent />
    <appfooter />
  </div>
</template>

<script>
import appheader from "@/components/includes/Header";
import appbanner from "@/components/includes/Banner";
import appcontent from "@/components/includes/Content";
import appfooter from "@/components/includes/Footer";

export default {
  name: "home",
  components: {
    appheader,
    appbanner,
    appcontent,
    appfooter,
  },
};
</script>