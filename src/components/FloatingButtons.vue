<script>
import BaseButton from './generics/BaseButton.vue';
export default {
    name: 'Floating Buttons',
    components: { BaseButton }
}
</script>

<template>
    <base-button class="go-up-btn"><a href="#app-header"><font-awesome-icon icon="fa-solid fa-angle-up"
                class="go-up-icon" /></a></base-button>


</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables.scss' as *;

.go-up-btn {
    background-color: $bg-yellow;
    border: none;
    color: $text-white-1;

    position: fixed;
    bottom: 1rem;
    right: 1rem;

    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 5px 5px;

    .go-up-icon {
        position: relative;
        right: .5px;
        bottom: 2px;
    }
}
</style>