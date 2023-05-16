<script>
    import Comp_Single_Item from './Comp_Single_Item.vue';
    export default
    {
        name        : "Comp_Special_Item",
        components  :
        {
            Comp_Single_Item
        },
        props       : ['cs_menu_item', 'cs_index'],
        data()
        {
            return {
            }
        },
        methods     :
        {
            click_on_special_item()
            {
                this.$emit("click_on_special", this.cs_index);
            }
        }
    }
</script>

<template>
    <div class="special_item"
     :class="(cs_menu_item.is_active) ? ('active') : ('')"
     v-on:click.prevent="click_on_special_item()"
    >
        <a href="" class="special_button std_flex">
            <div class="button_side">
                <button type="button">{{ (cs_menu_item.is_active) ? ('-') : ('+')}}</button>
            </div>
            <div class="text_side std_flex extra_font">
                <h5>{{ cs_menu_item.dates }}</h5>
                <h4>{{ cs_menu_item.text }}</h4>
            </div>
        </a>
        <div class="map_box"
         :class="(cs_menu_item.is_active) ? ('open') : ('')"
        >
            <div class="inner_box std_flex">
                <img :src="cs_menu_item.map_details" alt="Mappa città">
                <div class="info_box">
                    <h4>{{ cs_menu_item.sub_title }}</h4>
                    <p>{{ cs_menu_item.paragraph }}</p>
                    <Comp_Single_Item
                    :csi_menu_item = "{ 'text' : 'BOOK NOW', 'is_active' : true }" 
                    :csi_category = "1"
                    :csi_menu_class = "40" 
                    />
                </div>
                <img :src="cs_menu_item.img_details" alt="Foto concerto">
            </div>
        </div>
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
        .map_box
        {
            width: 100%;
            height: 0; 
            overflow: hidden;
            transition: height, $accordion_trans_time;
            .inner_box
            {
                width: 100%;
                height: 100%;
                overflow: hidden;
                padding: 0 $map_box_padding;
                margin: 0 auto;
                img
                {
                    width: 30%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center bottom;
                }
                .info_box
                {
                    width: 40%;
                    height: calc(100%);
                    padding: 0 2rem;
                    padding-top: 0.2rem;
                    h4
                    {
                        text-align: center;
                        color: white;
                        height: 20%;
                    } 
                    p
                    {
                        font-size: large;
                        color: $banner_text_color;
                        height: calc(50%);
                        overflow-y: auto;
                    } 
                }
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
            gap: 1.5rem;
            padding-bottom: 1.5rem;
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
            .open
            {
                height: $map_box_height;
            }
        } 
    }

</style>