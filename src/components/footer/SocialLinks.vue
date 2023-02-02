<script>
import BaseButton from '../generics/BaseButton.vue';
export default {
    name: 'Footer Social Links',
    components: { BaseButton }
}
</script>

<template>
    <!-- upper logo -->
    <header>
        <img class="w-50" src="../../assets/img/theme_eduprime_logo.png" alt="edu logo">
    </header>

    <!-- central description -->
    <main>
        <p class="mb-0">
            EduPrime is the most versatile WordPress theme for educational purposes, showcasing universities, courses,
            secondary schools etc.
        </p>
    </main>

    <!-- social links -->
    <footer>
        <base-button class="social-btn"></base-button>
    </footer>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.social-btn {
    background-color: transparent;
    border-color: $border-yellow-1;
    padding: 5px 5px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
</style>