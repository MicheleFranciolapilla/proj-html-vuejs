<script>
    import Comp_Single_Item from "./Comp_Single_Item.vue";
    export default
    {
        name        : "Comp_Menu_Manager",
        components  : 
        {
            Comp_Single_Item
        },
        props       : ['menu_class', 'is_horizontal', 'category', 'menu_items'],
    }
</script>

<template>
    <div class="menu_manager"
     :class="(!(is_horizontal) ? ('flex-column') : (''))"
     :style="(menu_class == 60) ? ('gap: 0.75rem;') : ('')"
    >
        <Comp_Single_Item  
         v-for="(item, index) in menu_items"
         :key="index + menu_class"
         :csi_menu_item = "item" 
         :csi_category = "category"
         :csi_menu_class = "menu_class" 
         :social_index = "index"
         />
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