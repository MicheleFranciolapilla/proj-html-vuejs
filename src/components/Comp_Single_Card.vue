<script>
    export default
    {
        name        : "Comp_Single_Card",
        props       : ['current_card', 'index'],
    }
</script>

<template>
    <div class="single_class position-relative">
        <img :src="current_card.image" alt="index">
        <div class="img_data">
            <h5>{{ current_card.title }}</h5>
            <p>{{ current_card.text }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;

        .single_class
        {
            width: 100%;
            height: 100%;
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
        }
</style>