<template>
    <div class="soundplayer">
        <template v-if="props.trackList">
            <PlayButton :active-play="buttonsState.activePlayerBTN" v-on:click="playSound()">
            </PlayButton>
            <p v-if="props.trackList.length > 1">Track {{ buttonsState.trackIndex + 1 }}/{{ props.trackList.length }}
            </p>
        </template>
    </div>
</template>

<script setup>
import { reactive, onUnmounted } from "vue";
import PlayButton from '@/components/player/PlayButton.vue';

const props = defineProps(['trackList'])

let buttonsState = reactive({
    activePlayerBTN: false,
    loadingPlayerBTN: false,
    trackIndex: 0,
})

let audio = new Audio(props.trackList[buttonsState.trackIndex] ?? []);
audio.preload = "auto"; // хак для прелоада аудио, хз


document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        audio.pause();
        buttonsState.activePlayerBTN = false;
    }
});

audio.onended = function () {
    NextTrack();
}

onUnmounted(() => audio.pause())


function playSound() {
    if (audio.paused) {
        audio.play();
        buttonsState.activePlayerBTN = true;
    }
    else if (props.trackList.length == 1) {
        audio.pause();
        buttonsState.activePlayerBTN = false;
    }
    else {
        NextTrack();
    }
}

function NextTrack() {
    if (buttonsState.trackIndex + 1 >= props.trackList.length) {
        buttonsState.trackIndex = 0;
    }
    else {
        buttonsState.trackIndex++;
    }
    buttonsState.activePlayerBTN = false;
    audio.pause();
    audio = new Audio(props.trackList[buttonsState.trackIndex]);
    audio.onended = function () {
        NextTrack();
    }
    audio.preload = "auto";
}

</script>

<style>
.soundplayer {
    text-align: center;
}
</style>