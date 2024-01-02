<template>
    <div class="alert alert-secondary">
        <h3>Next Screen</h3>
        <button
            class="btn quizbtn"
            @click="$emit('onEnd')">
            Back to Start
        </button>
    </div>
</template>

<style scoped>
    .alert {
        text-align: center;
        background: #eeeeee;
    }
    h3, .btn {
        margin: 30px 0;
    }
</style>