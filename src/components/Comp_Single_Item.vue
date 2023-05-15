<script>
import { withDirectives } from 'vue';

    export default
    {
        name        : "Comp_Single_Item",
        props       : ['csi_menu_item', 'csi_category', 'csi_menu_class'],
        methods     :
        {
            set_classes()
            {
                let classes_str = "";
                switch (this.csi_menu_class)
                {
                    // Icona dello header
                    case 0:
                        classes_str = "header_icon";
                        break;
                    // Pulsanti di heading_section
                    case 10:
                        classes_str = "heading_btn";
                        break;
                    // Pulsante/icona play
                    case 20:
                        classes_str = "poster_play";
                        break;                    
                    // Menu in footer
                    case 50:
                        classes_str = "footer_menu";
                        break;
                }
                return classes_str;
            },

            set_if_active()
            {
                if (this.csi_menu_item.is_active)
                    return "active";
                else
                    return "";
            }
        }
    }
</script>

<template>
    <div class="single_item" :class="(set_classes())">

        <button type=button
         v-if="(csi_category == 0)"
         :class="(set_if_active())"
        >
            <i :class="(csi_menu_item.text)"></i>
        </button>

        <button type="button"
         v-else-if="(csi_category == 1)"
         :class="(set_if_active())"
        >
            {{ csi_menu_item.text }}
        </button>

        <a href="#"
         v-else-if="(csi_category == 2)"
         :class="(set_if_active())"
        >
        {{ csi_menu_item.text }}
        </a>

        <a href="#"
          v-else>
        </a>

    </div>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;

        .single_item
        {
            button
            {
                border-radius: 3px;
            } 
            &.header_icon
            {
                button
                {
                    color: lightgray;
                    background-color: transparent;
                    border: none;
                    font-size: 2rem;
                    &:hover
                    {
                        color: white;
                    }
                } 
            }
            &.heading_btn
            {
                button
                {
                    color: white;
                    background-color: transparent;
                    border: 1px solid white;
                    font-size: 1.5rem;
                    padding: 1rem 1.5rem;
                    &.active
                    {
                        background-color: $img_title_color;
                        border-color: $img_title_color;
                    }
                    &:hover
                    {
                        color: black;
                        background-color: white;
                    }
                } 
            }
            &.poster_play
            {
                button
                {
                    color: white;
                    background-color: $img_title_color;
                    border: none;
                    font-size: 2rem;
                    width: 6rem;
                    height: 6rem;
                    text-align: center;
                    line-height: 6rem;
                    border-radius: 50%;
                } 
            }
            a
            {
                height: 100px;
                width: 50px;
            } 
            &.footer_menu
            {
                a
                {
                    color: $footer_menu_col;
                    background-color: transparent;
                    &.active 
                    {
                        color: white;
                    }
                    &:hover 
                    {
                        color: white;
                    }
                } 
            }
        }

</style>