<script>
import BaseSectionDesc from './generics/BaseSectionDesc.vue';
import BaseButton from './generics/BaseButton.vue';
import Faculties from './main/Faculties.vue';
import PresentationRow from './main/PresentationRow.vue';
import UniversityYear from './main/UniversityYear.vue';
import UpcomingEvents from './main/UpcomingEvents.vue';
export default {
    name: 'App Main',
    components: { BaseSectionDesc, BaseButton, Faculties, PresentationRow, UniversityYear, UpcomingEvents }
}
</script>

<template>
    <!-- # courses presentation section -->
    <section id="courses-presentation">
        <presentation-row icon="Books-icon.png" image="Graduation-Illustration.png"
            title="Thousands of courses for any type of student"
            paragraph="At EduPrime, it doesn't matter what domain you wish to pursue a career in. Here you can find a course that satisfies your needs within a click away and applies for a course in a matter of minutes. EduPrime is ranked as the most versatile university in the world, thanks to the number of courses it provides."
            button-color="yellow-btn" button-label="Browse through courses"></presentation-row>
    </section>

    <!-- # faculties -->
    <section id="faculties">
        <faculties></faculties>
    </section>

    <!-- # wave-1 -->
    <div class="main-wave-1"></div>

    <!-- # university year -->
    <section id="university-year">
        <university-year></university-year>
        <upcoming-events></upcoming-events>
    </section>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables.scss' as *;

#courses-presentation {
    padding: 2.5rem 0;
    background-image: url('../assets/img/home-background.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
}

#faculties {
    padding: 2.5rem 0;
    color: $text-grey-10;
}

.main-wave-1 {
    height: 10rem;
    background-size: cover;
    background-image: url('../assets/svg/svg-0.svg');
    position: relative;
    bottom: -1px;
}
</style>