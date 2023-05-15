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
        data()
        {
            return {
            }
        },
        methods     :
        {
            // data_for_props(elem)
            // {
            //     let data_obj = {
            //                         source  : this
            //                         is_icon : this.is_icon,
            //                         item    : elem
            //                     };
            //     return data_obj;
            // }
        }
    }
</script>

<template>
    <div class="menu_manager"
     :class="()"
    >
        <Comp_Single_Item  
         v-for="(item, index) in menu_items"
         :key="index + menu_class"
         :csi_menu_item = "item" 
         :csi_category = "category"
         :csi_menu_class = "menu_class" 
         />



        <!-- <div 
        v-if="(source == 'heading')"
        v-for="(item, index) in menu"
        :key="index">
            <button class="menu_btn" type="button"
            :class="(item.active) ? ('active') : ('')">{{ item.text }}</button>
        </div>
        <div v-else-if="(source == 'poster')"
        v-for="(item, index) in menu">
            <button class="menu_btn circular" type="button"
            :class="(item.active) ? ('active') : ('')"><i :class="(item.text)"></i></button>
        </div> -->
    </div>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;

        .menu_manager
        {
            // height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            // .menu_btn
            // {
            //     padding: 1rem 2rem;
            //     font-size: 1.5rem;
            //     color: white;
            //     border: 2px solid white;
            //     background-color: transparent;
            //     border-radius: 3px;
            //     &.active
            //     {
            //         border-color: transparent;
            //         background-color: $img_title_color;
            //     }
            //     &.circular
            //     {
            //         border-radius: 50%;
            //     }
            // } 
        }

</style>