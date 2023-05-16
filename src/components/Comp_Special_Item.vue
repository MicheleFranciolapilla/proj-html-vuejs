<script>
    import Comp_Single_Item from './Comp_Single_Item.vue';
    export default
    {
        name        : "Comp_Special_Item",
        components  :
        {
            Comp_Single_Item
        },
        props       : ['cs_menu_item'],
        data()
        {
            return {
            }
        },
        methods     :
        {
        }
    }
</script>

<template>
    <div class="special_item"
     :class="(cs_menu_item.is_active) ? ('active') : ('')"
    >
        <a href="#" class="special_button std_flex">
            <div class="button_side">
                <button type="button">{{ (cs_menu_item.is_active) ? ('-') : ('+')}}</button>
            </div>
            <div class="text_side std_flex">
                <h4>{{ cs_menu_item.text }}</h4>
                <h5>{{ cs_menu_item.dates }}</h5>
            </div>
        </a>
    </div>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;

    .special_item
    {
        width: $card_set_width;
        display: flex;
        flex-direction: column;
        align-items: start;
        background-color: $footer_upper_bg;
        .special_button
        {
            width: 100%;
            .button_side
            {
                flex-basis: 5%;
                display: flex;
                justify-content: center;
                align-items: center;
                button
                {
                    color: white;
                    margin: 0.3rem;
                    background-color: transparent;
                    border: none;
                    font-size: 1.5rem;
                    width: 2rem;
                    height: 2rem;
                    text-align: center;
                    line-height: 2rem;
                    font-weight: 800;
                } 
            }
            .text_side
            {
                flex-basis: 95%;
                color: $img_title_color;
                padding: 0 2rem;
            }
        }
        &:hover
        {
            cursor: pointer;
            background-color: $line_color;
            .special_button
            {
                .button_side
                {
                    button
                    {
                        background-color: $img_title_color;
                    } 
                }
            } 
        }
        &.active
        {
            .special_button
            {
                .button_side
                {
                    button
                    {
                        background-color: $img_title_color;
                    } 
                }
            }
        } 
    }

</style>