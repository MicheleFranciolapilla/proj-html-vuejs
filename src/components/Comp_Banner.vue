<script>
    export default
    {
        name        : "Comp_Banner",
        props       : ['banner_data'],
        methods     :
        {
            banner_clicked()
            {
                if (this.banner_data.clickable) this.$emit("link_clicked", this.banner_data.id);
            }
        }
    }
</script>

<template>
    <div class="banner std_flex flex-column" 
    :style="(banner_data.bg_color != '') ? (`background-color:${banner_data.bg_color}`) : ('')"
    :class="(banner_data.clickable) ? ('clickable') : ('')"
    v-on:click="banner_clicked()">
        <div class="bar"
        :style="(banner_data.bar_color != '') ? (`background-color:${banner_data.bar_color}`) : ('')">
        </div>
        <div class="banner_box std_flex flex-column justify-content-center">
            <h2 v-if="!(banner_data.clickable)" class="extra_font" style="font-size: 70px;">{{ banner_data.title }}</h2>
            <span v-else>{{ banner_data.title }}</span>
            <div v-if="banner_data.line_bool" class="line"></div>
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
            &.clickable
            {
                span
                {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: white;
                } 
                .banner_box
                {
                    gap: 0;
                    padding: 2.5rem;
                }
                &:hover
                {
                   cursor: pointer; 
                   background-color: rgb(213, 196, 196) !important;
                   span
                   {
                    color: black !important;
                   } 
                }
            }
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