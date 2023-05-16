<script>
    import Comp_Single_Item from "./Comp_Single_Item.vue";
    import Comp_Special_Item from "./Comp_Special_Item.vue";
    export default
    {
        name        : "Comp_Menu_Manager",
        components  : 
        {
            Comp_Single_Item,
            Comp_Special_Item
        },
        props       : ['menu_class', 'is_horizontal', 'category', 'menu_items'],
        methods     :
        {
            rebound_click(index_to_rebound)
            {
                this.$emit("rebounded",index_to_rebound);
            }
        }
    }
</script>

<template>
    <div class="menu_manager"
     :class="(!(is_horizontal) ? ('flex-column') : (''))"
     :style="((menu_class == 60) || (menu_class == 30)) ? ('gap: 0.75rem;') : ('')"
    >
        <div          
         v-for="(item, index) in menu_items"
         :key="index + menu_class">
            <Comp_Single_Item
             v-if="(menu_class != 30)"  
             :csi_menu_item = "item" 
             :csi_category = "category"
             :csi_menu_class = "menu_class" 
             :social_index = "index"
            />
            <Comp_Special_Item 
             v-else
             :cs_menu_item = "item"
             :cs_index = "index"
             @click_on_special = "rebound_click"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;

        .menu_manager
        {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
        }

</style>