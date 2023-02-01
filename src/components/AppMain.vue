<script>
import BaseSectionDesc from './generics/BaseSectionDesc.vue';
import BaseButton from './generics/BaseButton.vue';
import Faculties from './main/Faculties.vue';
import PresentationRow from './main/PresentationRow.vue';
import UniversityYear from './main/UniversityYear.vue';
import UpcomingEvents from './main/UpcomingEvents.vue';
import LatestCourses from './main/LatestCourses.vue';
import { coursesPresentation, examsPresentation, feesPresentation } from '../data';
export default {
    name: 'App Main',
    components: { BaseSectionDesc, BaseButton, Faculties, PresentationRow, UniversityYear, UpcomingEvents, LatestCourses },
    data() {
        return {
            coursesPresentation,
            examsPresentation,
            feesPresentation
        }
    }
}
</script>

<template>
    <!-- # courses presentation section -->
    <section id="courses-presentation">
        <presentation-row :icon="coursesPresentation.icon" :image="coursesPresentation.image"
            :title="coursesPresentation.title" :paragraph="coursesPresentation.paragraph" button-color="yellow-btn"
            :button-label="coursesPresentation.button"></presentation-row>
    </section>

    <!-- # faculties -->
    <section id="faculties">
        <faculties></faculties>
    </section>

    <!-- # wave-1 -->
    <div class="wave wave-1"></div>

    <!-- # university year -->
    <section id="university-year">
        <university-year></university-year>
        <upcoming-events></upcoming-events>
    </section>

    <!-- # wave-2 -->
    <div class="wave wave-2"></div>

    <!-- # latest courses -->
    <section id="latest-courses">
        <latest-courses></latest-courses>
        <presentation-row :icon="examsPresentation.icon" :image="examsPresentation.image"
            :title="examsPresentation.title" :paragraph="examsPresentation.paragraph" button-color="red-btn"
            :button-label="examsPresentation.button"></presentation-row>
    </section>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables.scss' as *;

#courses-presentation {
    background-image: url('../assets/img/home-background.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
}

#faculties {
    padding: 2.5rem 0;
    color: $text-grey-10;
}

.wave-1 {
    height: 10rem;
    background-size: cover;
    background-image: url('../assets/svg/svg-0.svg');
    bottom: -1px;
}

.wave-2 {
    background-image: url('../assets/svg/svg-1.svg');
    top: -1px;
}
</style>