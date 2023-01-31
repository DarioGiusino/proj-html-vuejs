<script>
import BaseSectionDesc from './generics/BaseSectionDesc.vue';
import BaseButton from './generics/BaseButton.vue';
export default {
    name: 'App Main',
    components: { BaseSectionDesc, BaseButton }
}
</script>

<template>
    <section id="faculties">
        <!-- # upper faculties section -->
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <figure class="section-icon">
                        <img src="../assets/img/Books-icon.png" alt="books">
                    </figure>
                    <base-section-desc title="Thousands of courses for any type of student"
                        paragraph="At EduPrime, it doesn't matter what domain you wish to pursue a career in. Here you can find a course that satisfies your needs within a click away and applies for a course in a matter of minutes. EduPrime is ranked as the most versatile university in the world, thanks to the number of courses it provides.">
                        <base-button button-label="Browse through courses"></base-button>
                    </base-section-desc>
                </div>
                <div class="col-4">
                    <img src="../assets/img/Graduation-Illustration.png" alt="graduation">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">

</style>