<script>
import BaseSectionDesc from './generics/BaseSectionDesc.vue';
import BaseButton from './generics/BaseButton.vue';
import Faculties from './main/Faculties.vue';
export default {
    name: 'App Main',
    components: { BaseSectionDesc, BaseButton, Faculties }
}
</script>

<template>
    <!-- # courses presentation section -->
    <section id="courses-presentation">
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <!-- grey icon -->
                    <figure class="section-icon">
                        <img src="../assets/img/Books-icon.png" alt="books">
                    </figure>
                    <!-- description -->
                    <base-section-desc title="Thousands of courses for any type of student"
                        paragraph="At EduPrime, it doesn't matter what domain you wish to pursue a career in. Here you can find a course that satisfies your needs within a click away and applies for a course in a matter of minutes. EduPrime is ranked as the most versatile university in the world, thanks to the number of courses it provides.">
                        <base-button class="yellow-btn" button-label="Browse through courses"></base-button>
                    </base-section-desc>
                </div>
                <div class="col-4">
                    <!-- big image -->
                    <img src="../assets/img/Graduation-Illustration.png" alt="graduation">
                </div>
            </div>
        </div>
    </section>

    <!-- # faculties -->
    <section id="faculties">
        <faculties></faculties>
    </section>

    <!-- # wave-1 -->
    <div class="main-wave-1"></div>
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
}
</style>