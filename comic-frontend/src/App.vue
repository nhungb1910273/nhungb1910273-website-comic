<script>
  import AppHeader from "@/components/AppHeader.vue";
  import AppFooter from "@/components/AppFooter.vue";
  export default {
    components: {
      AppHeader,
      AppFooter
    },
  };
</script>

<template>
  <div id="app">
    <AppHeader />
    <div class="container">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

