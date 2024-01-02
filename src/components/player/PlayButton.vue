<script>
export default {
    props: {
        activePlay: {
            type: Boolean,
            default: false
        }
    },
    emits: ['is-play']
}
</script>

<template>
    <div class="circle">
        <div class="container noSelect" type="button" @click="activePlay = !activePlay" v-on:click="$emit('is-play')">
            <div class="play-button" :class="{ active: activePlay }">
                <div class="arrow arrow-left"></div>
                <div class="arrow arrow-right"></div>
            </div>
        </div>
        <span class="circle__back-1" :class="{ active: activePlay }"></span>
        <span class="circle__back-2" :class="{ active: activePlay }"></span>
    </div>
</template>

<style scoped>
.noSelect {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.noSelect:focus {
    outline: none !important;
}

.play-button {
    position: relative;
    width: 2em;
    height: 2em;
}

.play-button .arrow {
    position: absolute;
    top: 0;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.play-button .arrow:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    transition-property: border, height;
    transition-duration: 0.25s;
    transition-timing-function: ease;
    border-style: solid;
    border-width: 1em 2em;
    border-color: transparent transparent transparent rgba(255, 255, 255, 1);
    width: 0;
    height: 0;
    box-sizing: content-box;
}

.play-button .arrow-left {
    left: 0;
}

.play-button .arrow-left:after {
    left: 0;
}

.play-button .arrow-right {
    right: 0;
}

.play-button .arrow-right:after {
    right: -2em;
}

.play-button.active .arrow {
    width: 40%;
}

.play-button.active .arrow:after {
    border-width: 0 2em;
    height: 2em;
}

.container {
    background-color: var(--mainColor);
    width: 6em;
    height: 6em;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}

.play-button {
    margin-left: 8px;
    transition-property: margin;
    transition-duration: 0.15s;
    transition-timing-function: ease;
    /* border: 1px var(--greyDark); */
}

.play-button:focus {
    outline: none;
    box-shadow: none;
}

.play-button.active {
    margin: 0;
}


/* waves */

.circle {
    margin: 3em 0;
    width: 12em;
    justify-self: center;
    border-radius: 1rem;
    display: grid;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    position: relative;
}

.circle__btn,
.container {
    grid-row: 1/2;
    grid-column: 1/2;
    display: flex;
    margin: 0.6rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    z-index: 300;
    cursor: pointer;
    position: relative;
}


.circle__back-1,
.circle__back-2 {
    grid-row: 1/2;
    grid-column: 1/2;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    filter: blur(1px);
    z-index: 100;
    position: absolute;
    box-shadow: 0 0 0 rgba(255, 255, 255, 0), 0 0 0 rgba(255, 255, 255, 0);
    transition: box-shadow 0.3s ease-in-out;
}

.circle__back-1 {
    /* background: linear-gradient(to bottom right, var(--greyLight-2) 0%, var(--white) 100%); */
    -webkit-animation: waves 4.2s linear infinite;
    animation: waves 4.2s linear infinite;
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
}

.circle__back-1.active {
    box-shadow: 0.4rem 0.4rem 0.8rem var(--greyLight-2), -0.4rem -0.4rem 0.8rem var(--white);
    -webkit-animation-play-state: running;
    animation-play-state: running;
}

.circle__back-2 {
    -webkit-animation: waves 7.1s ease-in-out infinite;
    animation: waves 7.1s ease-in-out infinite;
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
}

.circle__back-2.active {
    box-shadow: 0.4rem 0.4rem 0.8rem var(--greyLight-2), -0.4rem -0.4rem 0.8rem var(--white);
    -webkit-animation-play-state: running;
    animation-play-state: running;
}


@-webkit-keyframes waves {
    0% {
        opacity: 0;
    }

    15% {
        transform: scale(1);
        opacity: 0.75;
    }

    50% {
        opacity: 0.75;
    }

    100% {
        transform: scale(2.5);
        opacity: 0;
    }
}

@keyframes waves {
    0% {
        opacity: 0;
    }

    15% {
        transform: scale(1);
        opacity: 0.75;
    }

    50% {
        opacity: 0.75;
    }

    100% {
        transform: scale(2.5);
        opacity: 0;
    }
}
</style>
