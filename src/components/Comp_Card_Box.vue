<script>
    export default
    {
        name        : "Comp_Card_Box",
        data()
        {
            return {
            }
        }
    }
</script>

<template>
    <section id="card_box">

    </section>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;

        #card_box
        {
            background-color: $main_bg_color;
            padding: $card_box_padding;
        }

</style>