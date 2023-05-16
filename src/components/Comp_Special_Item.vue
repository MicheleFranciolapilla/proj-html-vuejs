<script>
    export default
    {
        name        : "Comp_Special_Item",
        props       : ['csi_menu_item'],
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
    <button type="button">{{csi_menu_item.text}}</button>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;


</style>