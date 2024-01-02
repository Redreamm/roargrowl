<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <div class="card">
      <div class="card-header">
        <div class="card-title">
          <div class="navigation">
            <nav>
                <RouterLink to="/">Game</RouterLink>
                <RouterLink to="/log">Log</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
          </div>
        </div>
      </div>
      <div class="card-body">
            <RouterView />
      </div>
    </div>
</template>

<style>
@import '@/assets/base.css';
body {
      margin: 0;
      background-color: #f5f5f5;
      font-family: Opensans2, sans-serif;
      color: #3f404a;
      background-image: url('@/assets/background-image.webp');
      background-position: 0 0;
      background-size: cover;
      min-height: -webkit-fill-available;
    height: 100dvh;
    }

img {
	max-width:100%;
	height: auto
}
#app {
  --mainColor: #FB6900;
  --mainIntensive: #F63700;
  --nightColor: #004853;
  --mainСounter: #007E80;
  --mainСounterIntensive: #00B9BD;
  --white: #FFFFFF;
  --greyLight-2: #c8d0e3;
  --greyDark: #9baac3;
  min-height: -webkit-fill-available;
    height: 100dvh;
    display: flex;
      align-items: center;
      justify-content: center;
}
.card {
    border-radius: 0.525rem;
    box-shadow: 0 2px 8px rgb(20 17 36 / 4%), 0 4px 32px rgb(20 17 36 / 8%);
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.45);
    display:flex;
    flex-direction: column;
    width: 100%;
    max-width: 480px;
    align-items: center;
  justify-content: center;
    max-height: 100dvh;
}

@media (min-height: 600px) {
    .card {
    min-height: 600px;
  }
}


.card .card-header {
    position: relative;
    padding: 10px 10px 5px 10px;
    /* Old browsers */
    height: 58px;
    width: 100%;
    border-bottom: 1px solid rgba(113 119 144 / 25%);
    padding: 0 30px;
    white-space: nowrap;
    border-radius: 0.525rem 0.525rem 0 0;
}
.card .card-body {
    overflow-y: auto;
    overflow-x: hidden;
    scroll-padding: 0;
    scrollbar-color: #5e9fa3 #fff;
    scrollbar-width: thin;
    flex-grow: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.card .card-body::before,
.card .card-body::after {
  content: '';
  flex: 1;
}

    @media (max-width: 767px), screen and (orientation: portrait) {

        .card {
        border-radius: 0;
        max-width: 100%;
      /*  min-height: -webkit-fill-available; */
   height: 100dvh;
      }
      .card .card-header {
        border-radius: 0;
      }
    }
.card .card-header .card-title {
    display: flex;
    flex: 0 1 100%;
flex-direction: row;
}
.card .card-header .card-title h2 {
    display: flex;
    align-items: center;
    margin: 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    flex: 0 1 100%;
}
.card .card-header .card-title .navigation {
    font-weight: 400;
    font-size: 13px;
    flex: 0 1 100%;
}
.card .card-body::-webkit-scrollbar {
    width: 20px;
    padding-right: 4px;
}

.card .card-body::-webkit-scrollbar-track {
    border-radius: 100px;
}
.card .card-body::-webkit-scrollbar-thumb {
    border: 6px solid transparent;
    border-radius: 100px;
    background-color: #5e9fa3;
    background-clip: content-box;
}


nav {
    width: 100%;
    display: flex;
    align-items: center;
}

nav a {
    padding: 16px 10px;
    text-decoration: none;
    color: var(--greyDark);
    border-bottom: 2px solid transparent;
    transition: 0.3s;
    box-sizing: border-box;
    font-size: 15px;
    flex-grow: 1;
}

nav a.is-active, nav a:hover {
    color: var(--nightColor);
    border-bottom: 2px solid var(--nightColor);
}

nav a.router-link-exact-active {
    color: var(--nightColor);
    border-bottom: 2px solid var(--nightColor);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
    color: var(--nightColor);
}


/* New Buttons */
.quizbtn {
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	text-decoration: none;
	border: 2px solid rgba(126, 126, 126, 0.3);
	transition: all 240ms cubic-bezier(0.1, 0.1, 0, 1);
	background-color: transparent;
	border-radius: 0.625rem;
	color: #423f3f;
	padding: 6px 20px;
	text-align: center;
	font-size: 14px;
	position: relative;
	z-index: 1;
	margin: 2px;
  font-family: Helvetica, sans-serif
}
.quizbtn::before {
	content: "";
	opacity: 0;
	transform-origin: center center;
	transform: scale3d(0.9, 0.65, 0.8);
	transition: all 240ms cubic-bezier(0.1, 0.1, 0, 1);
	position: absolute;
	top: -2px;
	right: -2px;
	width: calc(100% + 4px);
	height: calc(100% + 4px);
	border-radius: 0.625rem;
	background-color: #423f3f;
	z-index: -1;
}
.quizbtn:hover::before {
	opacity: 1;
	transform: scale3d(1, 1, 1);
}
.quizbtn:focus {
	box-shadow: 0 0 0 3px rgba(126, 126, 126, 0.15);
	outline: none;
}
.quizbtn:hover {
	color: #fff;
}
.quizline {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 10px 0;
}
.quizline .quizbtn {
	flex-grow: 1;
}
@media screen and (min-width: 768px) {
	.quizbtn {
		font-size: 16px;
		padding-top: 8px;
		padding-bottom: 8px;
		flex-grow: 1;
	}
	.quizline .quizbtn {
		flex-grow: 1;
	}
}
.quizbtn.qb_blue {
	background-color: transparent;
	border-color: #2a94de;
	color: #2a94de;
}
.quizbtn.qb_blue::before {
	background-color: #2a94de;
}
.quizbtn.qb_blue:focus {
	box-shadow: 0 0 0 3px rgba(42, 148, 222, 0.15);
}

.quizbtn.qb_blue:hover {
	color: #fff;
}
.quizbtn.qb_wrong {
	background-color: transparent;
	border-color: #c0c0c0;
	color: #c0c0c0;
	opacity: 0.2;
	transition: none;
	animation: the-wrong-answer 1.6s 1;
	box-shadow: none;
}
.quizbtn.qb_wrong::before {
	background-color: transparent;
	transition: none;
}
.quizbtn.qb_wrong:focus {
	box-shadow: none;
}
.quizbtn.qb_wrong:hover {
	color: #c0c0c0;
}
.quizbtn.qb_correct {
	animation: the-correct-answer 1.6s 1;
	background-color: #2a94de;
	color: #fff;
	box-shadow: 0 0 0 3px rgba(42, 148, 222, 0.15);
}
.quizbtn.qb_off {
    animation: none;
	background-color: transparent;
	border-color: #c0c0c0;
	color: #c0c0c0;
	opacity: 0.2;
	transition: none;
	box-shadow: none;
}
.quizbtn.qb_off::before {
	background-color: transparent;
	transition: none;
}
.quizbtn.qb_off:hover {
	color: #c0c0c0;
}
.quizbtn.qb_off:focus {
	box-shadow: none;
}
@keyframes the-correct-answer {
  0%   { box-shadow: 0 0 0 3px rgba(42, 148, 222, 0.15); }
  20%  { box-shadow: 0 0 0 9px rgba(120,255,68, 0.25); }
  60% { box-shadow: 0 0 0 21px rgba(120,255,68, 0.0); }
  61% { box-shadow: 0 0 0 3px rgba(42, 148, 222, 0.0); }
  100% { box-shadow: 0 0 0 3px rgba(42, 148, 222, 0.15); }
}
@keyframes the-wrong-answer {
  0%   { box-shadow: 0 0 0 0px rgba(42, 42, 42, 0.35); }
  100% { box-shadow: 0 0 0 12px rgba(255, 255, 255, 0.0); }
}
</style>
