<template>
    <body id="page-top">
      <div id="wrapper">
        <Sidebar />
        <router-view />
      </div>
      <Top />
      <LogoutModal />
    </body>
</template>
<script>
import Sidebar from "../components/Sidebar.vue";
import Top from "../components/Top.vue";
import LogoutModal from "../components/logoutModal.vue";

  export default {
    components: {
    Sidebar,
    Top,
    LogoutModal,
},
  };
</script>