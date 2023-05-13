<script>
    import { store } from "../store";
    export default
    {
        name    : "Comp_Header",
        data()
        {
            return {
                store
            }
        },
        methods :
        {
            nav_menu()
            {}
        }
    }
</script>

<template>
    <!-- Nello "header" prendono posto il logo e la "nav" (dentro cui è posizionato il menù) -->
    <!-- Il posizionamento "sticky" di "header", unitamente al suo "z-index" permette la sua staticità durante lo scroll ed il suo essere sul livello z più elevato (tutti gli altri componenti gli scorrono al di sotto) -->
    <!-- Allo scroll, dimensione e background di "header" commutano, se è il caso -->
    <header class="std_flex" :class="(store.is_scrolled) ? ('scrolled') : ('')">
        <a href="/" class="std_flex">
            <img src="img/avada-music-logo-retina.png" alt="Logo grande">
        </a>
        <!-- Nella "nav" è allocato il menù, che, nelle varie fasi, può essere in configurazione "compresso" o "espanso" -->
        <nav class="std_flex">
            <button id="nav_menu_btn" type="button" class="fs-2" v-on:click="nav_menu()">
                <i id="compressed_menu" class="fa-solid fa-bars"></i>
            </button>
        </nav>
    </header>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;

        header
        {
            position: sticky;
            top: 0;
            z-index: 999;
            width: 100%;
            height: $header_height_basic;
            padding: 0 $header_x_padding;
            transition: all 0.33s;
            &.scrolled
            {
                height: $header_height_scrolled;
                background-color: $header_bg_color;
            }
            a
            {
                height: 100%;
                img
                {
                    height: 80%;
                    object-fit: contain;
                } 
            } 
            nav
            {
                #nav_menu_btn
                {
                    border: none;
                    background-color: transparent;
                    #compressed_menu
                    {
                        color: $nav_menu_color;
                    }
                }
            } 
        }
</style>