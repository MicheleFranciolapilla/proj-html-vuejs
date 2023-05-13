<script>
    export default
    {
        name        : "Comp_Banner",
        props       : ['banner_data'],
    }
</script>

<template>
    <div class="banner std_flex flex-column" 
    :style="(banner_data.bg_color != '') ? (`background-color:${banner_data.bg_color}`) : ('')">
        <div class="bar"
        :style="(banner_data.bar_color != '') ? (`background-color:${banner_data.bar_color}`) : ('')">
        </div>
        <div class="banner_box std_flex flex-column justify-content-center">
            <h2>{{ banner_data.title }}</h2>
            <div class="line"></div>
            <div>
                <p>{{ banner_data.text }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    // Uso del foglio di stile scss
    @use "../assets/style/main.scss" as *;

    .banner
        {
            .bar
            {
                width: $bar_width;
                height: $bar_height;
            }
            .banner_box
            {
                color: white;
                padding: calc(4 * $bar_height) 0;
                gap: calc(2 * $bar_height);
                .line
                {
                    width: $line_width;
                    border-bottom: 3px solid $line_color;
                } 
                div
                {
                    width: $banner_text_width;
                    text-align: center;
                    font-size: 1.5rem;
                    color: $banner_text_color;
                }
            }
        }

</style>