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
                                                                dates       : "02/03/1973 Copenaghen, DANIMARCA",
                                                                is_active   : false,
                                                                map_details : "https://www.google.it/maps/vt/data=5yNe6CBuHPnypKhu2V21ZPAPkuH4InclAhq3pTDasAWb3W635RwTAbQyZpNsEuHhG1VSb6Ri__B2p0UFWliisI23MId5pewF0-Rlh3kxrZFiT5iKhb5O2JcT76zMmiuIY3NKyrvlWe9XBjcS4bcE_qC-0Gp5waOyM4_Rs14RCu2CazffwLtrjy3mkwJdkE1ulTgBoLPcNqvtjyikkNZWw9J8n7u_4uWpUk9omZM8PabZnmEDFuJImneXHBW0QBsWRHL18Q",
                                                                img_details : "rock_img/led_zeppelin.webp",
                                                                sub_title   : "I mitici Led Zeppelin",
                                                                paragraph   : "Posuere urna nec tincidunt praesent semper. Amet consectetur adipiscing elit duis. Turpis cursus in hac habitasse platea. Habitasse platea dictumst quisque sagittis purus sit amet. Nibh praesent tristique magna sit. Duis ultricies lacus sed turpis tincidunt id aliquet." 
                                                            },
                                                            {
                                                                text        : "PINK FLOYD",
                                                                dates       : "15/07/1989 Venezia, ITALIA",
                                                                is_active   : false,
                                                                map_details : "https://www.google.it/maps/vt/data=c-KoZ-O0uUqU0rnasyyyk7gNz7U_r-9k2g5rgAnLE8wBl6RtY0ya9UMlEF8R36Nm3cpMQCGbJrYKF2CCs-StiWVsGWd_Do0DC7VbX8iIX8vH6wFbfq-6YGOeW6UNw7XLIibIJno6By-TmJTf3ohHadSW0ZOH18-pMcw0mgHOPHXoa4q5wZMwoCNV8QfHmAE750CPCAE1yfF_q61TSreki7H1mOxnk3n8HO-_5o_1icQvcqc_Hn_hxiKqysnZNAO-cZ4yqVs",
                                                                img_details : "rock_img/pink_floyd.webp",
                                                                sub_title   : "Quando musica si scrive MUSICA!!!",
                                                                paragraph   : "Ut porttitor leo a diam sollicitudin tempor. Aenean sed adipiscing diam donec adipiscing tristique. Quis lectus nulla at volutpat. Vitae nunc sed velit dignissim. Augue neque gravida in fermentum et. In nibh mauris cursus mattis molestie a iaculis at. Bibendum ut tristique et egestas. Nec feugiat nisl pretium fusce." 
                                                            },
                                                            {
                                                                text        : "DEEP PURPLE",
                                                                dates       : "15/03/2007 Andria, ITALIA",
                                                                is_active   : false,
                                                                map_details : "https://www.google.it/maps/vt/data=Oxz_-jKvuLcGGkxzcqA8bqCnroHKMIMJDuTnDlYYqCm-f1mxBMGvbfgi6cMA3_cFTDcoOJ8EAOQE9y9Te3of_3bqOQQgi4Wz4Dvyb1Aw-81AaMzKeZDDlFJ7yX4HeG1EXJVl-BWU2La2-UiqqoXSIeRNdXBPZWLriq7cMZOtga1UV-vzb7VdpIWITAsfcQN0vYkfuwvoFqvQi6A7eHIGmCwgZZ2C0eOu4HJ8P6Gh-3ZFuXyrBZNTqWeQGdFhvp_eGCPTNc4",
                                                                img_details : "rock_img/deep_purple.webp",
                                                                sub_title   : "Dall'olimpo",
                                                                paragraph   : "Maecenas volutpat blandit aliquam etiam erat velit. Mattis pellentesque id nibh tortor id aliquet lectus. Egestas congue quisque egestas diam in. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Posuere urna nec tincidunt praesent semper. Amet consectetur adipiscing elit duis. Turpis cursus in hac habitasse platea. Habitasse platea dictumst quisque sagittis purus sit amet. Nibh praesent tristique magna sit. Duis ultricies lacus sed turpis tincidunt id aliquet. Auctor urna nunc id cursus. Senectus et netus et malesuada fames ac turpis. Ipsum consequat nisl vel pretium lectus quam id leo in. Feugiat scelerisque varius morbi enim." 
                                                            },
                                                            {
                                                                text        : "IRON MAIDEN",
                                                                dates       : "19/06/2007 Stadio Olimpico - Roma, ITALIA",
                                                                is_active   : false,
                                                                map_details : "https://www.google.it/maps/vt/data=bZl4npke1oGrk59fKMH9p5VASxJNHpPa9n9aCWq5xQ3U2CHONR9KqLAxNCjZhCNp_804luEVY80G-FAHjDneIqLBk4JBJ82yubuhA6CPKktiJg437rESPpXVKM8oP43C8DLArovXyod8N9F7P_he1yevsp0xSaYrDn84x9GGE1nOh-Bnxe1o_HfAyj8AdXJvTm8KJuPoDjOfXvXCaYvNw85Vb47TLTw5JGW07PRXdtWegm5HdVNgLLqaKkcqh9f4ayK67b8",
                                                                img_details : "rock_img/iron_maiden_1.webp",
                                                                sub_title   : "Eddie sbarca a Roma",
                                                                paragraph   : "Iaculis urna id volutpat lacus laoreet non curabitur. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Posuere sollicitudin aliquam ultrices sagittis orci a. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Posuere urna nec tincidunt praesent semper feugiat nibh. Justo donec enim diam vulputate. Lobortis scelerisque fermentum dui faucibus in ornare quam. Augue eget arcu dictum varius. Vulputate ut pharetra sit amet." 
                                                            },
                                                            {
                                                                text        : "ROLLING STONES",
                                                                dates       : "04/03/2014 Tokyo Dome - Tokyo, GIAPPONE",
                                                                is_active   : false,
                                                                map_details : "https://www.google.it/maps/vt/data=jzpqu8Ledv9Z-18I2wjmopqw5R4r4HLFszUfCGiIi26AbY9WOnhvjRt_7pOIwIQV6_s7Tdp0CeZDqUcOmF9uj4m4Z9n8-XLcBbmxpfGZTKjWbKEMfLh9O-yVbEnRspQRqAPGb5x47riA0tNd46UeWRtSndKFQI1BjSkwN9V3vZKHZI91pa2WjlE5AkaQr8pZP41H9LosDRMx2X2C-laRPG16L4jqa4xH9__rU7cmASMGb-FFteyJmrVbUVfEg3TdnJP9kH8",
                                                                img_details : "rock_img/rolling_stones.webp",
                                                                sub_title   : "70 anni e non sentirli...",
                                                                paragraph   : "Arcu non sodales neque sodales ut etiam. Mauris sit amet massa vitae tortor condimentum lacinia. Consequat id porta nibh venenatis cras sed. Turpis nunc eget lorem dolor sed. Interdum consectetur libero id faucibus nisl. Sit amet nulla facilisi morbi tempus iaculis urna id. Risus pretium quam vulputate dignissim. Sit amet facilisis magna etiam tempor orci eu lobortis elementum." 
                                                            },
                                                            {
                                                                text        : "IRON MAIDEN",
                                                                dates       : "02/09/2022 ROCK IN RIO - Rio de Janeiro, BRASILE",
                                                                is_active   : false,
                                                                map_details : "https://www.google.it/maps/vt/data=QXuFfo2QAxptUg4Ol6B1Nlwn96Mh-yuPZj-wdiXjvbsyuh0ht10L-faX5v0sVwRc5c8Ehl-hAvGm2vvLJKL0dJdixwSkOhz7zf363uPKfEa7YbE8OLbA-g7mGpp_KXLy2T8hZqV_YEDgoQtiGw_H0emvvz-T400ihrmLxw_q2htQYPl89m1tMWUq-2sjyKLhfD9CC28xwl0YPiWXwytY90aXMdFyPg1focGLKExY-Bc7e7wgghUno3o-8BbNpkIpOdwU",
                                                                img_details : "rock_img/iron_maiden_2.webp",
                                                                sub_title   : "Up the Irons",
                                                                paragraph   : "Dictum sit amet justo donec. Odio eu feugiat pretium nibh ipsum consequat nisl. Aenean sed adipiscing diam donec adipiscing. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Lacus sed turpis tincidunt id aliquet risus feugiat. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Amet consectetur adipiscing elit ut aliquam purus. Urna et pharetra pharetra massa massa ultricies. Eget velit aliquet sagittis id consectetur purus ut faucibus. Id diam vel quam elementum. Vestibulum morbi blandit cursus risus at ultrices mi tempus." 
                                                            },
                                                            {
                                                                text        : "GUNS'N ROSES",
                                                                dates       : "01/06/2023 Abu Dhabi, EMIRATI ARABI UNITI",
                                                                is_active   : false,
                                                                map_details : "https://www.google.it/maps/vt/data=OO1SoR23TJSwdgidtO5yNBR67U4eO-1Npqqvug2dTCy50-nqGO06KPbh2oNk1sKJWpicmUcVxDP7yxSXMJ3DUYcqS3EwoMaCBVn3f1sjB4W_tcJgy4gBiifsWdx8oNpr8_pJVOEXr31P3gsjCwv8FyT71ISvxWZi9hPJo3df0jJwLfsgYLpsQ0UYdAs_CGmYkQvmfuDfciAiEVOlPnr8lg_4YBAgo3SRqvqzfnvhns9ELOdMFP5dXlds55_IZ-_l4Zah1ik",
                                                                img_details : "rock_img/guns_roses.webp",
                                                                sub_title   : "Slash & co",
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
            },

            click_from_special(special_index)
            {
                if (this.live_dates_menu.menu_items[special_index].is_active)
                    this.live_dates_menu.menu_items[special_index].is_active = false;
                else
                {
                    this.live_dates_menu.menu_items.forEach( (item) => item.is_active = false);
                    this.live_dates_menu.menu_items[special_index].is_active = true;
                }
            }
        }
    }
</script>

<template>
    <main>
        <section id="heading_section" class="std_flex justify-content-center">
            <div id="heading_title" class="std_flex flex-column">
                <div>
                    <h1 class="extra_font" style="font-size: 160px;">Untold Stories</h1>
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
                 @rebounded = "click_from_special"
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