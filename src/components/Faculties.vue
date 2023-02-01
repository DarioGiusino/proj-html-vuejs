<script>
import { faculties } from '../data';
import BaseButton from './generics/BaseButton.vue';
import BaseSectionDesc from './generics/BaseSectionDesc.vue';
export default {
    name: 'Faculties section',
    data() {
        return { faculties }
    },
    components: { BaseButton, BaseSectionDesc },
    methods: {
        // build image src for faculties
        facultyImage(path) {
            //build src
            const url = new URL(`../assets/img/${path}-tabs-v2.png`, import.meta.url);

            //return src
            return url.href;
        }
    }
}
</script>

<template>
    <!-- # title & desc header -->
    <header class="text-center">
        <h1 class="mb-4">Faculties available at EduPrime</h1>
        <p class="mb-4">A single universisty with a load of courses tailored to satisfy any student's needs.</p>
    </header>

    <!-- # cards -->
    <main>
        <div class="line">
            <div class="container">
                <div class="row row-cols-5 justify-content-center">
                    <div v-for="faculty in faculties" class="col faculty-card">
                        <img :src="facultyImage(faculty.image)" :alt="faculty.name">
                        <p>{{ faculty.name }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row p-5 justify-content-center">
                <div class="col-4">
                    <img src="../assets/img/Gavel-Illustration-e1556884768193.png" alt="gavel">
                </div>
                <div class="col-6">
                    <base-section-desc class="p-4" title="Law Faculty"
                        paragraph="Learning from world-leading academics and practitioners, you'll not only receive an outstanding grounding in the theory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.">
                        <base-button class="red-btn" buttonLabel="Read More"></base-button></base-section-desc>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables.scss' as *;

.line {
    box-shadow: 0 0 15px -10px $fill-black;

    .faculty-card {
        width: 15%;
        padding: 1rem 1.5rem;
        border: 0.1px solid $border-white-4;
        text-align: center;
        color: $text-red;
        font-weight: 500;
        text-transform: capitalize;
        cursor: pointer;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        position: relative;

        img {
            width: 60%;
        }

        p {
            margin: 0.5rem 0 0 0;
        }

        &:hover {
            background-color: $bg-red-1;
            color: $text-white-1;

            img {
                filter: grayscale(1)
            }

            &::after {
                content: '\25BC';
                color: $bg-red-1;
                position: absolute;
                bottom: -15px;
                left: 50%;
                transform: translate(-50%, 0);
            }

        }
    }
}
</style>