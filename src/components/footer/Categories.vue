<script>
import BaseInputText from '../generics/BaseInputText.vue';
import BaseButton from '../generics/BaseButton.vue';
export default {
    name: 'Footer Categories',
    components: { BaseInputText, BaseButton }
}
</script>

<template>
    <!-- input text -->
    <base-input-text placeholder="Search..."><font-awesome-icon class="me-1 prova"
            icon="fa-solid fa-magnifying-glass" /></base-input-text>

    <!-- search categories -->
    <section class="my-4 text-end">
        <h5>Search categories</h5>
        <base-button></base-button>

    </section>

</template>

<style scoped lang="scss">
.prova {
    position: relative;
    left: 2px;
}
</style>