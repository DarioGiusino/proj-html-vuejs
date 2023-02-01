<script>
export default {
    name: 'Upcoming Events'
}
</script>

<template>
    <!-- # title and grey icon -->
    <header class="text-center pt-4 d-flex flex-column align-items-center">
        <figure class="section-icon">
            <img src="../../assets/img/upcoming-events-calendar-icon.png" alt="clock">
        </figure>
        <h1 class="fw-bold">Upcoming Events</h1>
    </header>

    <!-- #coaching cards -->
    <main>

    </main>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

* {
    background-color: $bg-red-1;
    color: $text-white-1;
}

main {
    padding: 3rem 0;
}
</style>