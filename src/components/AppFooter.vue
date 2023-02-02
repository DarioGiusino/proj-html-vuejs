<script>
import SocialLinks from './footer/SocialLinks.vue';
import NavLists from './footer/NavLists.vue';
export default {
    name: 'App Footer',
    components: { SocialLinks, NavLists }
}
</script>

<template>
    <!-- # footer -->
    <footer>
        <div class="container">
            <div class="row row-cols-3">
                <!-- ? social links (right footer) -->
                <div class="col">
                    <social-links></social-links>
                </div>

                <!-- ? nav lists (central footer) -->
                <div class="col">
                    <nav-lists></nav-lists>
                </div>

                <!-- ? categories (left footer) -->
                <div class="col"></div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables.scss' as *;

footer {
    background-color: $bg-red-2;
    color: $text-white-2;
    padding: 6rem 0;
}
</style>