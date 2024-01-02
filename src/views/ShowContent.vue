<template>
    <div class="content">
        <transition name="fade" mode="out-in" appear>
            <template v-if="isFetching"><loading-dots></loading-dots></template>
            <p v-else-if="error">Something went wrong! Please try again</p>
            <p v-else-if="data.length === 0">This doesn't exist</p>
            <div v-else>
                <template v-if="data[0].fimg_tag">
                    <span style="max-width:640px" v-html="data[0].fimg_tag"></span>
                </template>
                <h2>{{ data[0].title.rendered }}</h2>
                <template v-if="data[0].content.rendered">
                <div v-html="data[0].content.rendered"></div></template>

                <div class="extra">
                    <div v-if="store.guessedIds.has(data[0].id)">
                        <template v-if="data[0].voices_urls">
                            <SoundPlayer :track-list="data[0].voices_urls"></SoundPlayer>
                        </template>
                    </div>
                    <div v-else>
                        You can listen the sounds after you guess them in the quiz.
                    </div>
                    <button class="btn quizbtn" @click="router.push({ path: `/` })">
                        Back to game
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import {  ref, onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router';

import SoundPlayer from '@/components/player/SoundPlayer.vue';
import LoadingDots from '@/components/Loading.vue';

// import { useQuery } from '@vue/apollo-composable';
// import ONE_ANIMAL_QUERY from '@/graphql/oneanimal.query.gql';

import { useResultStore } from '@/stores/results';

const route = useRoute()
const urlSlug = route.params.slugName
const router = useRouter()

// const { result, loading, error } = useQuery(ONE_ANIMAL_QUERY, () => ({
//     slug: urlSlug
// }))

        const data = ref([]);
        const isFetching = ref(false);
        const error = ref('');

        onMounted(async () => {
        try {
            isFetching.value = true;

            const response = await fetch('https://api.roargrowl.com/wp-json/wp/v2/animal?slug='+urlSlug);
            const responseData = await response.json();

            data.value = responseData;
            isFetching.value = false;
        } catch (e) {
            error.value = 'Error fetching data';
            isFetching.value = false;
        }
        });


const emit = defineEmits(['success'])

const props = defineProps(['oneAnimal'])


const store = useResultStore()


</script>

<style scoped>
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.extra {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.cover-img img {
    max-width: 100%;
    height: auto;
    border-radius: 0.525rem;
    background-color: #e2e2e2;
}

.content-wrapper {
    display: block;
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
</style>