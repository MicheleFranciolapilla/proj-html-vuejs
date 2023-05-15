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
    },
    data()
    {
      return {
        store
      }
    },
    mounted()
    {
      // Event listener in ascolto su "scroll". Nel caso, setta le apposite variabili nello store
      document.addEventListener("scroll", event => 
      { 
        this.store.is_scrolled = (window.scrollY != 0); 
      });
    },
    methods:
    {
    }
  }
</script>

<template>
  <div id="web_page">
    <!-- Nel contenitore "underlay" prende posto la foto principale. Si è preferito il tag "img" alla modalità "background-image" unicamente per non avere un "div" vuoto -->
    <!-- "Underlay" è posizionato "fixed" per consentire a tutto il layout di scorrergli sopra -->
    <div id="underlay">
      <img src="img/home_slider.jpg" alt="Foto principale">
    </div>
    <!-- Nel contenitore "overlay" giacciono tutti i componenti della pagina -->
    <div id="overlay">
      <Comp_Header/>
      <Comp_Main/>
      <Comp_Footer/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  // Uso del foglio di stile scss
  @use "./assets/style/main.scss" as *;

    #web_page
    {
      #underlay
      {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 100vh;
        img
        {
          width: 100%;
          height: 100%;
          object-fit: cover;
        } 
      }
    }
</style>
