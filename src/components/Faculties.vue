<script>
import { faculties } from '../data';
export default {
    name: 'Faculties section',
    data() {
        return { faculties }
    },
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

        img {
            width: 60%;
        }

        p {
            margin: 0.5rem 0 0 0;
        }

        &:hover {
            background-color: $bg-red-2;
            color: $text-white-2;

            img {
                filter: invert(1);
            }

        }
    }
}
</style>