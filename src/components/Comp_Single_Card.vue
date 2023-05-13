<script>
    export default
    {
        name        : "Comp_Single_Card",
        props       : ['current_card', 'index'],
        methods:
        {
            set_card_classes()
            {
                if ((this.index == 0) || (this.index == 3))
                    return "horizontal";
                else if ((this.index == 4) || (this.index == 5))
                    return "vertical_with_grow";
            }
        }
    }
</script>

<template>
    <div class="card" :class="set_card_classes()">
        <!-- <img :src="current_card.image" alt=""> -->
    </div>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;

        // .card
        // {
        //     width: $card_short_side;
        //     height: $card_long_side;
        //     border: 3px solid green;
        //     &.horizontal
        //     {
        //         width: $card_long_side;
        //         height: $card_short_side;
        //         border: 3px solid white;

        //     }
        //     &.vertical_with_grow
        //     {
        //         flex-grow: 1;
        //         border: 3px solid red;
        //     }
        // }
</style>