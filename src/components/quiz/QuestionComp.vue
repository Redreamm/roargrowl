<template>
    <div class="alert">

        <h4><blur-txt>{{ props.oneAnimal.acf.question_description }}</blur-txt></h4>

        <template v-if="props.oneAnimal.voices_urls">
            <SoundPlayer :track-list="props.oneAnimal.voices_urls"></SoundPlayer>
        </template>

        <div class="quizline">
            <button class="quizbtn qb_blue" v-for="(answer, index) in AnswersList" :key="index"
                @click.prevent="onAnswer(answer, index)" :class="{
                    qb_correct: buttonsState.correctAnsweredQuestion.has(index),
                    qb_wrong: buttonsState.answeredQuestionSet.has(index),
                    qb_off: (buttonsState.correctAnsweredQuestion.size && !buttonsState.correctAnsweredQuestion.has(index))
                }">
                {{ answer }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { defineEmits, reactive } from "vue";
import SoundPlayer from '@/components/player/SoundPlayer.vue';
import BlurTxt from '@/components/effects/BlurTxt.vue';

const emit = defineEmits(['success'])

const props = defineProps(['oneAnimal'])



const AnswersList = createFullAnswersList(props.oneAnimal)

let buttonsState = reactive({
    answeredQuestionSet: new Set(),
    correctAnsweredQuestion: new Set()
})

let audioWrong1 = new Audio('/sfx/wrong-n.ogg');

function onAnswer(selected, index) {
    if (selected === props.oneAnimal.title.rendered) {
        buttonsState.correctAnsweredQuestion.add(index);
        emit('success');
    }
    else if (buttonsState.answeredQuestionSet.has(index)) {
        // do nothing
    }
    else {
        buttonsState.answeredQuestionSet.add(index);
        audioWrong1.currentTime = 0;
        audioWrong1.play();
    }
}

function createFullAnswersList(animal) {
    let title = animal.title.rendered;
    let answersArray = animal.acf.answers_list.split(',').map((item) => item.trim());
    answersArray.push(title);
    answersArray = uniq(answersArray);
    shuffle(answersArray);
    return answersArray;
}
function uniq(a) {
    return Array.from(new Set(a));
}
function shuffle(array) {
    // The code is repeated in QuizView.vue, can be moved to functions
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
</script>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.25s ease-out;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}



.alert {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>