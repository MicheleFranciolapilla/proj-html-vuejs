<script>
    import Comp_Menu_Manager from './Comp_Menu_Manager.vue';
    export default
    {
        name        : "Comp_Footer",
        components  : 
        {
            Comp_Menu_Manager
        },
        data()
        {
            return {
                footer_menu :
                {
                    menu_class          : 50,
                    is_horizontal       : true,
                    category            : 2,
                    menu_items          :
                                        [
                                            {
                                                text        : 'Home',
                                                is_active   : true
                                            },
                                            {
                                                text        : 'Meet the Band',
                                                is_active   : false
                                            },
                                            {
                                                text        : 'Live Dates',
                                                is_active   : false
                                            },
                                            {
                                                text        : 'Latest News',
                                                is_active   : false
                                            },
                                            {
                                                text        : 'Albums',
                                                is_active   : false
                                            },
                                            {
                                                text        : 'Fans',
                                                is_active   : false
                                            }
                                        ]
                },
                social_menu :
                {
                    menu_class          : 60,
                    is_horizontal       : true,
                    category            : 0,
                    menu_items          :
                                        [
                                            {
                                                text        : 'fa-brands fa-facebook-f',
                                                is_active   : false
                                            },
                                            {
                                                text        : 'fa-brands fa-twitter',
                                                is_active   : false
                                            },
                                            {
                                                text        : 'fa-brands fa-instagram',
                                                is_active   : false
                                            },
                                            {
                                                text        : 'fa-brands fa-youtube',
                                                is_active   : false
                                            }
                                        ]
                }
            }
        }
    }
</script>

<template>
    <footer>
        <div id="footer_upper">
            <img src="img/avada-music-logo-retina.png" alt="Logo nel footer">
            <Comp_Menu_Manager 
             :menu_class = "footer_menu.menu_class"
             :category = "footer_menu.category"
             :is_horizontal="footer_menu.is_horizontal"
             :menu_items = "footer_menu.menu_items" 
            />
        </div>
        <div id="footer_lower">
            <p>
                &#169; Copyright 2012 - 2023 | 
                <a href="#">Avada Website Builder </a>
                by 
                <a href="#">TeamFusion</a> 
                | All Right Reserved | Powered by 
                <a href="#">WordPress</a>
            </p>
            <Comp_Menu_Manager 
             :menu_class = "social_menu.menu_class"
             :category = "social_menu.category"
             :is_horizontal="social_menu.is_horizontal"
             :menu_items = "social_menu.menu_items" 
            />
        </div>
    </footer>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;

        footer
        {
            width: 100%;
            position: relative;
            #footer_upper
            {
                height: $footer_height_upper;
                background-color: $footer_upper_bg;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 $header_x_padding;
                img
                {
                    height: 35%;
                    object-fit: cover;
                } 
            }
            #footer_lower
            {
                height: $footer_height_lower;
                background-color: $footer_lower_bg;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: $header_x_padding;
                p
                {
                    line-height: 100%;
                    color: $footer_menu_col;
                    font-size: medium;
                    a
                    {
                        color: $img_title_color;
                    } 
                } 
            }
        }

</style>