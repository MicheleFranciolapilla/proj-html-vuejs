<script>
    export default
    {
        name        : "Comp_Single_Card",
        props       : ['current_card', 'index'],
    }
</script>

<template>
    <div class="single_card position-relative">
        <img :src="current_card.image" alt="index">
        <div class="img_data">
            <h5>{{ current_card.title }}</h5>
            <p>{{ current_card.text }}</p>
        </div>
        <div class="img_overlay">
            <h5 class="title_on_overlay">{{ current_card.title }}</h5>
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
                overflow: hidden;
                background-color: $img_data_bg;
                transition: all $img_transition_time;
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
                right:0;
                top: 0;
                width: 100%;
                height: 0;
                overflow: hidden;
                background-color: $img_overlay_color;
                transition: all $img_transition_time;
                .title_on_overlay
                {
                    color: white;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    -webkit-transform: translate(-50%, -50%);
                    -ms-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                    text-align: center;
                }
            }
            &:hover .img_overlay
            {
                height: 100%;
            }
            &:hover .img_data
            {
                height: 0;
                padding: 0;
            }
        }
</style>