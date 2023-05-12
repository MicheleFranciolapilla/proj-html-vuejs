<script>
// Importazione dello store (state management)
  import { store } from "./store"
  import Comp_Header from "./components/Comp_Header.vue";
  import Comp_Main from "./components/Comp_Main.vue";
  import Comp_Footer from "./components/Comp_Footer.vue";

  export default{
    name        : "App",
    components  : 
    {
      Comp_Header,
      Comp_Main,
      Comp_Footer
    }
  }
</script>

<template>
  <div id="web_page" class="container-fluid">
    <Comp_Header/>
    <Comp_Main/>
    <Comp_Footer/>
  </div>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "./assets/style/main.scss" as *;

    #web_page
    {
      background-color: $web_page_bg_color;
    }

</style>
