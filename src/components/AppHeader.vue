<script>
export default {
    name: 'App Header'
}
</script>

<template>
    <header>
        <!-- # upper navbar -->
        <nav class="d-flex justify-content-between">
            <a href="#">
                <img class="header-logo" src="../assets/img/theme_eduprime_logo.png" alt="edu prime logo">
            </a>

            <navbar-links></navbar-links>
        </nav>

        <!-- # jumbotron -->
    </header>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables.scss' as *;

header {
    height: 600px;
    background-image: url('../assets/img/theme_slider2_bg-1.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    nav {
        padding: 1.75rem;
        background-color: $bg-red-2;

        .header-logo {
            width: 16rem;
        }
    }
}
</style>