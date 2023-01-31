<script>
import BaseButton from './generics/BaseButton.vue';
export default {
    name: 'Jumbotron',
    components: { BaseButton },
    props: { title: String }
}
</script>

<template>
    <section id="jumbotron">
        <h1>{{ title }}</h1>
        <slot></slot>
        <div class="buttons">
            <base-button class="left-jumbo-btn" button-label="Search courses"></base-button>
            <base-button class="right-jumbo-btn" button-label="Apply for university"></base-button>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables.scss' as *;

#jumbotron {
    background-color: $bg-red-2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    padding: 5rem;

    h1 {
        font-weight: 700;
        font-size: 57px;
        margin-bottom: 2rem;
    }

    .buttons {
        margin-top: 2rem;
        display: flex;
        gap: 2rem;

        .left-jumbo-btn {
            background-color: $bg-yellow;
            color: $text-white-1;
            font-weight: 500;
        }

        .right-jumbo-btn {
            background-color: $bg-white-2;
            color: $text-red;
            font-weight: 500;
        }
    }

}
</style>