<script>
    import { store } from "../store";
    import Comp_Menu_Manager from "./Comp_Menu_Manager.vue";
    export default
    {
    name        : "Comp_Header",
    components  :
    {
        Comp_Menu_Manager
    },
    data() {
        return {
            store,
            nav_icon    :
                            {
                                menu_class          : 0,
                                is_horizontal       : true,
                                category            : 0,
                                menu_items          :
                                                        [
                                                            {
                                                                text        : 'fa-solid fa-bars',
                                                                is_active   : true
                                                            }
                                                        ]
                            }
        };
    },
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
            <Comp_Menu_Manager 
            :menu_class = "nav_icon.menu_class"
            :is_horizontal="nav_icon.is_horizontal"
            :category = "nav_icon.category"
            :menu_items = "nav_icon.menu_items"
            />
            <!-- <button id="nav_menu_btn" type="button" class="fs-2" v-on:click="nav_menu()">
                <i id="compressed_menu" class="fa-solid fa-bars"></i>
            </button> -->
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
                    color: $nav_menu_color;
                    &:hover
                    {
                        color: $nav_menu_hover_col;
                    }
                }
            } 
        }
</style>