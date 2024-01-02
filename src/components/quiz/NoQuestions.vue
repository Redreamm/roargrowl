<template>
    <div class="alert alert-secondary">
        <h3>You solved all the questions of the quiz</h3>
        <div>
        <button
            class="btn quizbtn"
            @click="myRouter.push('/log')">
            View answers
        </button>
        <button
            class="btn quizbtn"
            @click="$emit('onReset')">
            Replay all questions
        </button>
    </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const myRouter = useRouter();
</script>

<style scoped>
    .alert {
        text-align: center;
    }
    h3, .btn {
        margin: 10px 5px;
    }
</style>