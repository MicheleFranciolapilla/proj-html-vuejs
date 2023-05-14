<script>
    import Comp_Menu from './Comp_Menu.vue';
    import Comp_Banner from './Comp_Banner.vue';
    import Comp_Single_Card from './Comp_Single_Card.vue';
    export default
    {
        name        : "Comp_Main",
        components  : 
        {   
            Comp_Menu,
            Comp_Banner,
            Comp_Single_Card
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
                                ],
                cards_array     : [
                                    {
                                        image   : "img/blog_music_techo-1200x600.jpg", 
                                        title   : "Technology and music",
                                        text    : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."     
                                    },
                                    {
                                        image   : "img/blog-post3-600x900.jpg", 
                                        title   : "While my guitar gently weeps",
                                        text    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."     
                                    },
                                    {
                                        image   : "img/blog-post4-600x900.jpg", 
                                        title   : "It just sounds better",
                                        text    : "Aliquet risus feugiat in ante metus dictum at. Laoreet non curabitur gravida arcu ac. Lectus proin nibh nisl condimentum."     
                                    },
                                    {
                                        image   : "img/blog_flavor_rock-1200x600.jpg",
                                        title   : "The flavor of rock",
                                        text    : "Nunc aliquet bibendum enim facilisis. Habitant morbi tristique senectus et netus et malesuada."     
                                    },
                                    {
                                        image   : "img/blog-post1-600x900.jpg", 
                                        title   : "Taking it back to the old school",
                                        text    : "Tellus molestie nunc non blandit massa enim nec. Aliquam faucibus purus in massa tempor nec feugiat. Vulputate enim nulla aliquet porttitor lacus. "     
                                    },
                                    {
                                        image   : "img/blog-post2-600x900.jpg", 
                                        title   : "Sharing the stage with a legend",
                                        text    : " Mauris sit amet massa vitae tortor condimentum lacinia. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis."     
                                    }
                                ]
            }
        },
        methods:
        {
            set_card_classes(index)
            {
                switch (index)
                {
                    case 0:
                        return "first";
                    case 1:
                        return "second";
                    case 2:
                        return "third";
                    case 3:
                        return "fourth";
                    case 4:
                        return "fifth";
                    case 5:
                        return "sixth";
                }
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
        <section id="card_set_section">
            <Comp_Banner :banner_data = "banner_array[1]" />
            <div id="card_set">
                <div class="card" 
                v-for="(item, index) in cards_array"
                :key="index"
                :class="set_card_classes(index)">
                    <Comp_Single_Card :current_card = "item" :index = "index" />
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
        #card_set_section
        {
            background-color: $main_bg_color;
            padding: 0 $card_set_padding calc(2 * $card_set_padding);
            #card_set
            {
                width: $card_set_width;
                height: $card_set_height;
                display: grid;
                gap: $card_set_gap;
                grid-template-areas: 
                    "first first fifth"
                    "second third fifth"
                    "second third sixth"
                    "fourth fourth sixth";
                margin: 0 auto;
                .card:nth-child(1)
                {
                    grid-area: first;
                }
                .card:nth-child(2)
                {
                    grid-area: second;
                }
                .card:nth-child(3)
                {
                    grid-area: third;
                }
                .card:nth-child(4)
                {
                    grid-area: fourth;
                }
                .card:nth-child(5)
                {
                    grid-area: fifth;
                }
                .card:nth-child(6)
                {
                    grid-area: sixth;
                }
            } 
        }
    }

</style>