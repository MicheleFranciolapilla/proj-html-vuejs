<script>
    import Comp_Single_Item from "./Comp_Single_Item.vue";
    export default
    {
        name        : "Comp_Menu_Manager",
        components  : 
        {
            Comp_Single_Item
        },
        props       : ['source', 'is_icon', 'menu'],
        data()
        {
            return {
            }
        },
        methods     :
        {
            data_for_props(elem)
            {
                let data_obj = {
                                    source  : this.source,
                                    is_icon : this.is_icon,
                                    item    : elem
                                };
                return data_obj;
            }
        }
    }
</script>

<template>
    <div class="menu_manager">
        <div 
        v-if="(source == 'heading')"
        v-for="(item, index) in menu"
        :key="index">
            <button type="button"
            :class="(item.active) ? ('active') : ('')">{{ item.text }}</button>
        </div>
        <!-- <Comp_Single_Item 
        v-for="(elem, index) in this.menu"
        :key="index"
        :item_features = "data_for_props(elem)" /> -->
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
            button
            {
                padding: 1rem 2rem;
                font-size: 1.5rem;
                color: white;
                border: 2px solid white;
                background-color: transparent;
                border-radius: 3px;
                &.active
                {
                    border-color: transparent;
                    background-color: $img_title_color;
                }
            } 
        }

</style>