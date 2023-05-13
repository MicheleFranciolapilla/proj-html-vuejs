<script>
    import Comp_Menu from './Comp_Menu.vue';
    import Comp_Banner from './Comp_Banner.vue';
    import Comp_Card_Box from "./Comp_Card_Box.vue";
    export default
    {
        name        : "Comp_Main",
        components  : 
        {   
            Comp_Menu,
            Comp_Banner,
            Comp_Card_Box  
        },
        data()
        {
            return {
                banner_array    : [
                                    {
                                        bg_color        : "#323844",
                                        bar_color       : "#EC4858",
                                        title           : "Music Is LIfe",
                                        text            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Felis eget velit aliquet sagittis id consectetur purus ut." 
                                    },
                                    {
                                        bg_color        : "",
                                        bar_color       : "",
                                        title           : "Latest Band News",
                                        text            : "Posuere sollicitudin aliquam ultrices sagittis orci. Morbi tristique senectus et netus et. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Hendrerit gravida rutrum quisque non." 
                                    },
                                    {
                                        bg_color        : "",
                                        bar_color       : "",
                                        title           : "Live Dates",
                                        text            : "Ac felis donec et odio pellentesque diam volutpat commodo. Et sollicitudin ac orci phasellus egestas tellus. Ac turpis egestas maecenas pharetra convallis posuere morbi. " 
                                    }
                                ] 
            }
        }
    }
</script>

<template>
    <main>
        <section id="heading_section" class="std_flex justify-content-center">
            <div id="heading_title" class="std_flex flex-column">
                <h1>Untold Stories</h1>
                <h2>There is an untold story behind every favorite song.</h2>
                <Comp_Menu menu = "heading_menu" />
            </div>
        </section>
        <Comp_Banner :banner_data = "banner_array[0]" />
        <Comp_Card_Box/>
    </main>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;

    main
    {
        position: relative;
        #heading_section
        {
            height: calc(100vh - $header_height_basic);
            #heading_title
            {
                color: white;
            }
        }
    }

</style>