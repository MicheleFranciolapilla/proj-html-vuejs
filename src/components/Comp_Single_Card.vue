<script>
    export default
    {
        name        : "Comp_Single_Card",
        props       : ['current_card', 'index'],
        methods     :
        {
            img_overlay_on()
            {
                let img_list = document.querySelectorAll(".img_overlay");
                if (!(img_list[this.index].classList.contains("img_overlay_full")))
                {
                    img_list[this.index].classList.add("img_overlay_full");
                    console.log("mouse in");
                }
            },

            img_overlay_off()
            {
                let img_list = document.querySelectorAll(".img_overlay");
                if (img_list[this.index].classList.contains("img_overlay_full"))
                {
                    img_list[this.index].classList.remove("img_overlay_full");
                    console.log("mouse out");
                }
            }
        }
    }
</script>

<template>
    <div class="single_card position-relative" 
    v-on:mouseover="img_overlay_on()" 
    v-on:mouseleave="img_overlay_off()">
        <img :src="current_card.image" alt="index">
        <div class="img_data">
            <h5>{{ current_card.title }}</h5>
            <p>{{ current_card.text }}</p>
        </div>
        <div class="img_overlay">
            <h5>{{ current_card.title }}</h5>
        </div>
    </div>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;

        .single_card
        {
            width: 100%;
            height: 100%;
            cursor: pointer;
            img
            {
                width: 100%;
                height: 100%;
                object-fit: cover;
            } 
            .img_data
            {
                position: absolute;
                bottom: 0;
                width: 100%;
                padding: 1.5rem 1rem;
                text-align: center;
                background-color: $img_data_bg;
                h5
                {
                    color: $img_title_color;
                } 
                p
                {
                    color: $img_text_color;
                } 
            }
            .img_overlay
            {
                position: absolute;
                left: 0;
                bottom: 0;
                top: 0;
                width: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: $img_overlay_color;
                color: white;
                transition: width 0.25s;
            }
            .img_overlay_full
            {
                width: 100%;
            }
        }

        @keyframes overlay_sliding 
        {
            from    {width: 0;}   
            to      {width: 100%;} 
        }

</style>