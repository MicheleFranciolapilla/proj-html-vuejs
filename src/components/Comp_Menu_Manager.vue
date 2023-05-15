<script>
    import Comp_Single_Item from "./Comp_Single_Item.vue";
    export default
    {
        name        : "Comp_Menu_Manager",
        components  : 
        {
            Comp_Single_Item
        },
        props       : ['menu', 'menu_items'],
        data()
        {
            return {
                        compressed  : true,
                        expanded    : false,   
                        horizontal  : true,
                        vertical    : false,
                        stringa:"ciao mi chiamo michele" 
            }
        },
        methods     :
        {
            data_for_props(item_type, item_icon, item_focused)
            {
                // Caso 0 ---> hamburger
                let obj_to_send = 
                {
                    is_icon     : item_icon, 
                    btn_label   : this.menu.item_expand_btn,
                    btn_type    : this.menu.item_btn_type,
                    focused     : item_focused,
                    section     : this.menu.item_section  
                };
                return obj_to_send;
            }
        }
    }
</script>

<template>
    <div class="menu_manager" 
    :style="(menu.item_direction == vertical) ? ('flex-direction: column') : ('')">
        <Comp_Single_Item 
        v-if="((menu.item_switchable) && (menu.item_status = compressed))"
        :item_features = "data_for_props(0, true, true)" />
    </div>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;

        .menu_manager
        {
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

</style>