<script>
    export default
    {
        name        : "Comp_Single_Item",
        props       : ['item_features'],
    }
</script>

<template>
    <div class="single_item">
        <button v-if="item_features.is_icon" class="icon_button" type="button"><i :class="()item_features.btn_label"></i></button>
    </div>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;

        .single_item
        {
            .icon_button
            {
                font-size: 2rem;
                background-color: transparent;
                padding: 3px 5px;
                border: 2px solid white;
                border-radius: 3px;
            }
        }

</style>