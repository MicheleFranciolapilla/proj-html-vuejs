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
                                },
                live_dates_menu :
                                {
                                    menu_class          : 30,
                                    is_horizontal       : false,
                                    category            : 1,
                                    menu_items          :
                                                        [
                                                        {
                                                                text        : "LED ZEPPELIN",
                                                                dates       : "02/03/1973 COPENAGHEN, Danimarca",
                                                                is_active   : false,
                                                                map_details : "",
                                                                img_details : "",
                                                                sub_title   : "Untold Stories",
                                                                paragraph   : "Posuere urna nec tincidunt praesent semper. Amet consectetur adipiscing elit duis. Turpis cursus in hac habitasse platea. Habitasse platea dictumst quisque sagittis purus sit amet. Nibh praesent tristique magna sit. Duis ultricies lacus sed turpis tincidunt id aliquet." 
                                                            },
                                                            {
                                                                text        : "PINK FLOYD",
                                                                dates       : "15/07/1989 VENEZIA, Italia",
                                                                is_active   : false,
                                                                map_details : "",
                                                                img_details : "",
                                                                sub_title   : "Untold Stories",
                                                                paragraph   : "Ut porttitor leo a diam sollicitudin tempor. Aenean sed adipiscing diam donec adipiscing tristique. Quis lectus nulla at volutpat. Vitae nunc sed velit dignissim. Augue neque gravida in fermentum et. In nibh mauris cursus mattis molestie a iaculis at. Bibendum ut tristique et egestas. Nec feugiat nisl pretium fusce." 
                                                            },
                                                            {
                                                                text        : "DEEP PURPLE",
                                                                dates       : "15/03/2007 ANDRIA, Italia",
                                                                is_active   : false,
                                                                map_details : "",
                                                                img_details : "",
                                                                sub_title   : "Untold Stories",
                                                                paragraph   : "Maecenas volutpat blandit aliquam etiam erat velit. Mattis pellentesque id nibh tortor id aliquet lectus. Egestas congue quisque egestas diam in. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Posuere urna nec tincidunt praesent semper. Amet consectetur adipiscing elit duis. Turpis cursus in hac habitasse platea. Habitasse platea dictumst quisque sagittis purus sit amet. Nibh praesent tristique magna sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Auctor urna nunc id cursus. Senectus et netus et malesuada fames ac turpis. Ipsum consequat nisl vel pretium lectus quam id leo in. Feugiat scelerisque varius morbi enim." 
                                                            },
                                                            {
                                                                text        : "IRON MAIDEN",
                                                                dates       : "19/06/2007 Stadio Olimpico - ROMA, Italia",
                                                                is_active   : false,
                                                                map_details : "",
                                                                img_details : "",
                                                                sub_title   : "Untold Stories",
                                                                paragraph   : "Iaculis urna id volutpat lacus laoreet non curabitur. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Posuere sollicitudin aliquam ultrices sagittis orci a. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Posuere urna nec tincidunt praesent semper feugiat nibh. Justo donec enim diam vulputate. Lobortis scelerisque fermentum dui faucibus in ornare quam. Augue eget arcu dictum varius. Vulputate ut pharetra sit amet." 
                                                            },
                                                            {
                                                                text        : "ROLLING STONES",
                                                                dates       : "04/03/2014 TOKYO DOME - Tokyo, Giappone",
                                                                is_active   : false,
                                                                map_details : "",
                                                                img_details : "",
                                                                sub_title   : "Untold Stories",
                                                                paragraph   : "Arcu non sodales neque sodales ut etiam. Mauris sit amet massa vitae tortor condimentum lacinia. Consequat id porta nibh venenatis cras sed. Turpis nunc eget lorem dolor sed. Interdum consectetur libero id faucibus nisl. Sit amet nulla facilisi morbi tempus iaculis urna id. Risus pretium quam vulputate dignissim. Sit amet facilisis magna etiam tempor orci eu lobortis elementum." 
                                                            },
                                                            {
                                                                text        : "IRON MAIDEN",
                                                                dates       : "02/09/2022 ROCK IN RIO - RIO DE JANEIRO, Brasile",
                                                                is_active   : false,
                                                                map_details : "",
                                                                img_details : "",
                                                                sub_title   : "Untold Stories",
                                                                paragraph   : "Dictum sit amet justo donec. Odio eu feugiat pretium nibh ipsum consequat nisl. Aenean sed adipiscing diam donec adipiscing. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Lacus sed turpis tincidunt id aliquet risus feugiat. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Amet consectetur adipiscing elit ut aliquam purus. Urna et pharetra pharetra massa massa ultricies. Eget velit aliquet sagittis id consectetur purus ut faucibus. Id diam vel quam elementum. Vestibulum morbi blandit cursus risus at ultrices mi tempus." 
                                                            },
                                                            {
                                                                text        : "GUNS'N ROSES",
                                                                dates       : "01/06/2023 ABU DHABI, Emirati Arabi Uniti",
                                                                is_active   : false,
                                                                map_details : "",
                                                                img_details : "",
                                                                sub_title   : "Untold Stories",
                                                                paragraph   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
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
        <section id="live_dates_section">
            <Comp_Banner :banner_data = "banner_array[3]" />
            <div id="live_dates_tab">
                <Comp_Menu_Manager 
                 :menu_class = "live_dates_menu.menu_class"
                 :is_horizontal="live_dates_menu.is_horizontal"
                 :category = "live_dates_menu.category"
                 :menu_items = "live_dates_menu.menu_items"
                />
            </div>
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
                min-height: $card_set_height;
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
        #live_dates_section
        {
            background-color: $main_bg_color;
            padding: 0 $card_set_padding calc(2 * $card_set_padding);
        }
    }

</style>