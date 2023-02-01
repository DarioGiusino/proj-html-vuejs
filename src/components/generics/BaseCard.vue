<script>
import BaseButton from './BaseButton.vue';
export default {
    name: 'Base Card',
    components: { BaseButton },
    props: {
        image: String,
        title: String,
        paragraph: String,
        date: String,
        teacher: String,
        price: String

    }
}
</script>

<template>
    <div class="card">
        <figure class="section-icon">
            <img src="../../assets/img/Speaker-icon.png" class="card-img-top" alt="...">
        </figure>
        <div class="card-body">
            <h5 class="fw-semibold">How to be a speaker</h5>
            <p class="mb-2">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            <p class="mb-2"><span></span>Teacher: <strong>James Collins</strong></p>
            <p class="mb-2"><span></span>Price: <strong>$21,00</strong></p>
            <p class="mb-2"><span></span>20 May 21:30 PM</p>
            <base-button class="red-btn card-btn" button-label="View Course"></base-button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.card {
    background-color: $bg-white-1;
    box-shadow: 0 0 20px -10px $fill-black;
    color: $text-grey-9;
    text-align: center;
    padding: 1rem;
    position: relative;

    figure {
        margin: 0 auto;
    }

    .card-body {
        color: $text-grey-8 ;
    }

    .card-btn {
        background-color: $bg-red-1;
        box-shadow: 0 0 20px -10px $fill-black;
        padding: 10px 20px;
        position: absolute;
        top: 92%;
        right: 50%;
        transform: translate(50%, 0);
    }
}
</style>