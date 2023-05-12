<script>
    export default
    {
        name    : "Comp_Header",
        methods :
        {
            nav_menu()
            {}
        }
    }
</script>

<template>
    <header class="fixed-top vh-100 container-fluid">
        <nav class="fixed-top std_flex px-5">
            <a href="/" class="std_flex">
                <img src="img/avada-music-logo-retina.png" alt="Logo header">
            </a>
            <button id="nav_menu_btn" type="button" class="fs-2" v-on:click="nav_menu()">
                <i class="fa-solid fa-bars"></i>
            </button>
        </nav>
    </header>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;

    header
    {
        background-image: url(img/home_slider.jpg);
        background-size: cover;
        nav
        {
            height: $nav_height_transparent;
            border: 3px solid yellow;
            a
            {
                height: 100%;
                img
                {
                    height: 70%;
                    object-fit: contain;
                    border: 1px solid white;
                }
            } 
            #nav_menu_btn
            {
                background-color: transparent;
                border: none;
                i
                {
                    color: $nav_menu_btn_color; 
                } 
            }
        }
    }

</style>