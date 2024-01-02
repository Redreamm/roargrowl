<template>
    <div class="alert" :class="'alert-' + type">
        <template v-if="props.text">
        <h2>{{ props.text }}</h2></template>
        <template v-if="props.questionData.title.rendered">
        <h3>{{ props.questionData.title.rendered }}</h3></template>
        <template v-if="props.questionData.fimg_tag">
            <span style="max-width:640px" v-html="props.questionData.fimg_tag"></span>
        </template>
        <div class="btnline">
            <button class="btn quizbtn" @click="$emit('onNext')">
                Next question
            </button>
            <button class="btn quizbtn" @click="router.push({ path: `/log/${props.questionData.slug}` })">
                Learn more
            </button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps(['type', 'text', 'questionData'])

const router = useRouter()
</script>

<style scoped>
.alert {
    text-align: center;
}

.alert img {
    border-radius: 0.525rem;
    background-color: #e2e2e2;
}

h2,
.btn {
    margin: 25px 5px;
}
</style>