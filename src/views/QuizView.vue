<template>
    <div class="training">
        <transition name="fade" mode="out-in" appear>
            <div v-if="isFetching"><loading-dots></loading-dots></div>
            <p v-else-if="error">Something went wrong! Please try again</p>
            <template v-else>

                <transition name="flip" mode="out-in">

                    <app-start-screen v-if="state.mainState == 'start'" @onStart="onStart">
                    </app-start-screen>

                    <app-question-comp v-else-if="state.mainState == 'question'"
                    @success="onQuestionSuccess"
                        :oneAnimal="currentAnimal">
                    </app-question-comp>

                    <app-message v-else-if="state.mainState == 'message'" :text="message.text" :questionData="currentAnimal"
                        @onNext="onNext" @onEnd="onEnd">
                    </app-message>

                    <app-next-screen v-else-if="state.mainState == 'next'" @onEnd="onEnd">
                    </app-next-screen>

                    <no-questions v-else-if="state.mainState == 'noquestions'" @onEnd="onEnd" @onReset="onReset">
                    </no-questions>

                    <div v-else>Unknown state</div>

                </transition>
            </template>
        </transition>
    </div>
</template>

<script>
import { computed, reactive, ref, onMounted } from "vue";

import AppStartScreen from '@/components/quiz/StartScreen.vue';
import AppNextScreen from '@/components/quiz/NextScreen.vue';
import NoQuestions from '@/components/quiz/NoQuestions.vue';
import AppMessage from '@/components/quiz/QuestionResult.vue';

import LoadingDots from '@/components/Loading.vue';

import AppQuestionComp from '@/components/quiz/QuestionComp.vue';

import { useResultStore } from '@/stores/results'

export default {
    name: 'AnimalsQuiz',
    components: {
        AppStartScreen,
        AppNextScreen,
        NoQuestions,
        AppMessage,
        AppQuestionComp,

        LoadingDots
    },
    setup() {

        const data = ref([]);
        const isFetching = ref(false);
        const error = ref('');

        onMounted(async () => {
        try {
            isFetching.value = true;

            const response = await fetch('https://api.roargrowl.com/wp-json/wp/v2/animal?_fields=acf,voices_urls,featured_media,fimg_tag,title,slug,id&per_page=100');
            const responseData = await response.json();

            data.value = responseData;
            isFetching.value = false;
        } catch (e) {
            error.value = 'Error fetching data';
            isFetching.value = false;
        }
        });


        const store = useResultStore()

        let currentAnimal = computed(() => {
            if (!data.value) {
                return null
            }
            const matchingAnimal = data.value.find(animal => animal.id === state.currentId);
            return matchingAnimal || null;
        })

        let state = reactive({
            mainState: 'start',
            answeredQuestionsCounter: 0,
            currentId: '',
            guessedIds: new Set()
        })
        let ids = computed(() => {
            const dataArray = data.value;

            if (!dataArray || !Array.isArray(dataArray) || dataArray.length === 0) {
                console.error("Invalid or empty dataArray");
                return [];
            }
            let copy = dataArray.map(animal => animal.id);
            copy = copy.filter((el) => !store.guessedIds.has(el))
            shuffle(copy);
            return copy;
        });

        let message = reactive({
            type: '',
            text: ''
        })



        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        // quiz functions
        function onStart() {
            state.mainState = 'question';
            if (state.answeredQuestionsCounter == 0) {
                state.currentId = ids.value[0];
            }
            if (ids.value.length == 0) {
                state.mainState = 'noquestions';
            }
        }


        function onEnd() {
            checkQuestion();
            state.mainState = 'start';
        }
        function onNext() {
            if (ids.value.length > 0) {
                checkQuestion();
                state.mainState = 'question';
            }
            else {
                state.mainState = 'start';
                //         store.guessedIds.clear();
                //        state.answeredQuestionsCounter = 0;
            }
        }

        let audioCorrect1 = new Audio('/sfx/correct2.ogg');
        audioCorrect1.preload = "auto";


        function onQuestionSuccess() {
            setTimeout(() => state.mainState = 'message', 300);

            store.guessedIds.add(state.currentId);

            message.text = 'Correct!';
            message.type = 'success';

            audioCorrect1.play();
        }
        function checkQuestion() {
            state.answeredQuestionsCounter++;
            //      if (state.answeredQuestionsCounter < ids.value.length)
            //     {
            state.currentId = ids.value[0];
            //      }
            //       else
            //       {
            //          state.answeredQuestionsCounter = 0;
            //       }
        }
        function onReset() {
            state.answeredQuestionsCounter = 0;
            store.guessedIds.clear();
            state.mainState = 'start';
        }
        return {
            isFetching,
            error,
            state,

            onStart,
            onEnd,
            onNext,
            onQuestionSuccess,
            onReset,

            message,
            currentAnimal,
            ids
        }
    },
}
</script>




<style>
.training {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.fade-enter-from {
    opacity: 0
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s ease
}

.fade-leave-to {
    opacity: 0
}

/*  баг, вложенные транзишены глючат */

.flip-enter-active {
    animation: flipInX 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.flip-leave-to,
.flip-leave-active {
    animation: flipOutX 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

@keyframes flipInX {
    from {
        transform: translateX(25%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes flipOutX {
    from {
        transform: translateX(0);
        opacity: 1;
    }

    to {
        transform: translateX(-25%);
        opacity: 0;
    }
}


@media (min-width: 1024px) {
    .about {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
}
</style>
