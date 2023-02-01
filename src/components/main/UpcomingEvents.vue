<script>
import BaseCard from '../generics/BaseCard.vue';
import { events } from '../../data';
export default {
    name: 'Upcoming Events',
    components: { BaseCard },
    data() {
        return { events }
    }
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
        <div class="container">
            <div class="row row-cols-3 justify-content-center">
                <div v-for="event in events" :key="event.date" class="col">
                    <base-card :title="event.title" :date="event.date" :paragraph="event.text" button-color="red-btn"
                        button-label="Find More"></base-card>
                </div>
            </div>
        </div>
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