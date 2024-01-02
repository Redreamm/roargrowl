<template>
    <div class="about">
        <transition name="fade" mode="out-in" appear>
            <div v-if="isFetching"><loading-dots></loading-dots></div>

            <p v-else-if="error">Something went wrong! Please try again</p>
            <div v-else>


                <h1>You got {{ guessedData.length }} </h1>
                <div class="animals-list">

                    <div v-for="animal in guessedData" :key="animal.id" class="al-item">

                            <RouterLink :to="'/log/' + animal.slug">
                                <animal-card>
                                    <template v-slot:title>
                                        {{ animal.title.rendered }}
                                    </template>
                                    <template v-if="animal.fimg_tag">
                                        <span v-html="animal.fimg_tag"></span>
                                    </template>
                                     <template v-slot:numbofsounds>
                                        {{ animal.voices_urls.length }}
                                    </template>
                                </animal-card>
                            </RouterLink>
                        </div>
                        <div v-for="animal in remainingData" :key="animal.id" class="al-item">
                            <RouterLink to="/"><animal-card></animal-card></RouterLink>
                        </div>
                    </div>
                </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from 'vue-router';
import LoadingDots from '@/components/Loading.vue';
import AnimalCard from '@/components/AnimalCard.vue';



import { useResultStore } from '@/stores/results'
const store = useResultStore()


        const guessedData = ref([]);
        const remainingData = ref([]);
        const isFetching = ref(false);
        const error = ref('');

        onMounted(async () => {
        try {
            isFetching.value = true;

            const response = await fetch('https://api.roargrowl.com/wp-json/wp/v2/animal?_fields=acf,voices_urls,featured_media,fimg_tag,title,slug,id&per_page=100');
            const responseData = await response.json();

            const guessedAnimals = responseData.filter(animal => store.guessedIds.has(animal.id));
            const remainingAnimals = responseData.filter(animal => !store.guessedIds.has(animal.id));

            // Assign the separated arrays to different refs
            guessedData.value = guessedAnimals;
            remainingData.value = remainingAnimals;
            isFetching.value = false;
        } catch (e) {
            error.value = 'Error fetching data';
            isFetching.value = false;
        }
        });

</script>

<style scoped>
h1 {
    text-align: center;
}

.about {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin: auto;
}

.animals-list {
    display: flex;
    flex-wrap: wrap;
}

.al-item {
    width: 50%;
    padding: 4px;
    flex-grow: 0;
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
}</style>
