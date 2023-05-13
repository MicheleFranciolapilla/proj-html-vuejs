<script>
    import Comp_Menu from './Comp_Menu.vue';
    export default
    {
        name        : "Comp_Main",
        components  : Comp_Menu,
        data()
        {
            return {
                // Oggetto menu:
                heading_menu :  {}
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
        <section id="gap_section" class="std_flex flex-column">
            <div id="bar"></div>
            <div id="gap_box" class="std_flex flex-column justify-content-center">
                <h2>Music Is LIfe</h2>
                <div id="line"></div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur natus quas amet est minus, dolores ullam quae sunt neque!</p>
                </div>
            </div>
        </section>
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
        #gap_section
        {
            height: $gap_section_height;
            background-color: $gap_section_bg;
            #bar
            {
                width: $bar_width;
                height: $bar_height;
                background-color: $bar_color;
            }
            #gap_box
            {
                height: calc(100% - $bar_height);
                color: white;
                gap: calc(2 * $bar_height);
                #line
                {
                    width: $line_width;
                    border-bottom: 3px solid $line_color;
                } 
                div
                {
                    width: $gap_text_width;
                    text-align: center;
                    font-size: 1.5rem;
                    color: $gap_text_color;
                }
            }
 
        }
    }

</style>