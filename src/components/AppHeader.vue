<script>
import NavLinks from './NavLinks.vue';
import BaseButton from './generics/BaseButton.vue';
import Jumbotron from './Jumbotron.vue';
export default {
    name: 'App Header',
    components: { NavLinks, BaseButton, Jumbotron },
    data() {
        return {
            headerLinks: ['Home', 'Courses', 'About Us', 'News', 'Pages', 'Contact', 'Purchase']
        }
    }
}
</script>

<template>
    <header>
        <!-- # upper navbar -->
        <nav class="d-flex justify-content-between align-items-center">
            <!-- left logo -->
            <a href="#">
                <img class="header-logo" src="../assets/img/theme_eduprime_logo.png" alt="edu prime logo">
            </a>

            <!-- right navbar -->
            <nav-links class="links" :links="headerLinks">
                <base-button class="nav-button" button-label="view courses"></base-button>
            </nav-links>
        </nav>

        <!-- # jumbotron -->
        <jumbotron title="Key to your success">
            <p class="jumbo-paragraph">EduPrime is the most versatile WordPress theme for educational purposes,
                showcasing
                universities, courses, secondary schools etc.</p>
        </jumbotron>
    </header>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables.scss' as *;

header {
    height: 600px;
    background-image: url('../assets/img/theme_slider2_bg-1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    color: $text-white-1;

    nav {
        padding: 1.25rem;
        background-color: $bg-red-2;

        .header-logo {
            width: 16rem;
        }

        .links {
            font-weight: 500;

            .nav-button {
                background-color: $bg-yellow;
                color: $text-white-1;
                text-transform: uppercase;
                font-size: 13px;
                font-weight: 500;
            }
        }
    }

    .jumbo-paragraph {
        margin-bottom: 0;
        width: 35rem;
        font-weight: 300;
    }
}
</style>