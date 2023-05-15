<script>
    import { store } from "../store";
    import Comp_Menu_Manager from "./Comp_Menu_Manager.vue";
    import Comp_Banner from './Comp_Banner.vue';
    import Comp_Single_Card from './Comp_Single_Card.vue';
    export default
    {
        name        : "Comp_Main",
        components  : 
        {   
            Comp_Menu_Manager,
            Comp_Banner,
            Comp_Single_Card
        },
        data()
        {
            return {
                store,
                banner_array    : 
                                [
                                    {
                                        id              : 0, 
                                        bg_color        : "#323844",
                                        bar_color       : "#EC4858",
                                        line_bool       : true,  
                                        title           : "Music Is LIfe",
                                        text            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus at urna. Felis eget velit aliquet sagittis id consectetur purus ut.",
                                        clickable       : false 
                                    },
                                    {
                                        id              : 1, 
                                        bg_color        : "",
                                        bar_color       : "",
                                        line_bool       : true, 
                                        title           : "Latest Band News",
                                        text            : "Posuere sollicitudin aliquam ultrices sagittis orci. Morbi tristique senectus et netus et. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Hendrerit gravida rutrum quisque non.", 
                                        clickable       : false 
                                    },
                                    {
                                        id              : 2, 
                                        bg_color        : "#EC4858",
                                        bar_color       : "",
                                        line_bool       : false, 
                                        title           : "VIEW ALL LATEST NEWS",
                                        text            : "" ,
                                        clickable       : true 
                                    },
                                    {
                                        id              : 3, 
                                        bg_color        : "",
                                        bar_color       : "",
                                        line_bool       : true, 
                                        title           : "Live Dates",
                                        text            : "Ac felis donec et odio pellentesque diam volutpat commodo. Et sollicitudin ac orci phasellus egestas tellus. Ac turpis egestas maecenas pharetra convallis posuere morbi.",
                                        clickable       : false 
                                    },
                                    {
                                        id              : 4, 
                                        bg_color        : "#EC4858",
                                        bar_color       : "",
                                        line_bool       : false, 
                                        title           : "VIEW ALL LIVE DATES",
                                        text            : "" ,
                                        clickable       : true 
                                    }
                                ],
                cards_array     : 
                                [
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
                                ],
                heading_menu    :
                                {
                                    menu_class          : 10,
                                    is_horizontal       : true,
                                    // Categorie:
                                    // 0 = icone
                                    // 1 = pulsante
                                    // 2 = testo
                                    // 3 = special
                                    category            : 1,
                                    menu_items          : 
                                                        [
                                                            {
                                                                text        : "LATEST ALBUM",
                                                                is_active   : true,
                                                            },
                                                            {
                                                                text        : "LIVE DATES",
                                                                is_active   : false,
                                                            }
                                                        ]  
                                },
                poster_menu     :
                                {
                                    menu_class          : 20,
                                    is_horizontal       : true,
                                    category            : 0,
                                    menu_items          :
                                                        [
                                                            {
                                                                text        : 'fa-solid fa-play',
                                                                is_active   : true
                                                            }
                                                        ]
                                }
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
            },

            manage_click(link_id)
            {
                console.log("E' stato cliccato il link....",link_id);
                console.log("Il titolo dell'elemento cliccato è: ", this.banner_array[link_id].title);
            }
        }
    }
</script>

<template>
    <main>
        <section id="heading_section" class="std_flex justify-content-center">
            <div id="heading_title" class="std_flex flex-column">
                <div>
                    <h1>Untold Stories</h1>
                    <h2>There is an untold story behind every favorite song.</h2>
                </div>
                <Comp_Menu_Manager 
                 :menu_class = "heading_menu.menu_class"
                 :category = "heading_menu.category"
                 :is_horizontal="heading_menu.is_horizontal"
                 :menu_items = "heading_menu.menu_items" 
                />
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
        <Comp_Banner :banner_data = "banner_array[2]" @link_clicked = "manage_click" />
        <section id="poster_section">
            <p>
                "I just listened to it and said to myself, "Man, I really love this album." Still, today, it sounds so fresh. It sounds full of ideas. These guys knew what they were doing. They're good. And they're inventive. I haven't heard anything this year that's as inventive. I don't really expect to." 
            </p>
            <Comp_Menu_Manager 
             :menu_class = "poster_menu.menu_class"
             :is_horizontal="poster_menu.is_horizontal"
             :category = "poster_menu.category"
             :menu_items = "poster_menu.menu_items"
            />
        </section>
        <section id="live_date_section">
            <Comp_Banner :banner_data = "banner_array[3]" />
        </section>
        <Comp_Banner :banner_data = "banner_array[4]" @link_clicked = "manage_click" />
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
                text-align: center;
                color: white;
                gap: 2.5rem;
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
        #poster_section
        {
            height: 100vh;
            background-image: url(img/home-testimonial-parallax.jpg);
            background-position: center top;
            background-size: cover;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            gap: 3rem;
            padding-bottom: 25vh;
            p
            {
                text-align: center;
                color: white;
                font-size: 2rem;
                font-style: italic;
                line-height: 3rem;
                font-weight: 600;
                padding: 0 25vw;

            } 
        }
        #live_date_section
        {
            background-color: $main_bg_color;
        }
    }

</style>