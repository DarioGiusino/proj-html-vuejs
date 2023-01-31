<script>
export default {
    name: 'Base Button',
    props: { buttonLabel: String },
    emits: ['button-clicked']
}
</script>

<template>
    <!-- # generic button -->
    <button @click="$emit('button-clicked')">
        <!-- slot to add some icon [or not :) ] -->
        <slot></slot>
        {{ buttonLabel }}
    </button>
</template>

<style scoped lang="scss">
button {
    cursor: pointer;
    border: inherit;
    border-radius: 30px;
    padding: 10px 30px;
}
</style>