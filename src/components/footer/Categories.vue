<script>
import BaseInputText from '../generics/BaseInputText.vue';
export default {
    name: 'Footer Categories',
    components: { BaseInputText }
}
</script>

<template>
    <!-- input text -->
    <base-input-text placeholder="Search..."><font-awesome-icon class="me-1 prova"
            icon="fa-solid fa-magnifying-glass" /></base-input-text>

</template>

<style scoped lang="scss">
.prova {
    position: relative;
}
</style>