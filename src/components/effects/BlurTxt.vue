<template>
    <div>
        <span class="blurreveal"><slot></slot></span>
    </div>
</template>
<style>

span.blurreveal {
	color: #333;
    font-size: 1.25em;
	animation: blur 1.5s ease-out 1;
	-webkit-animation: blur 1.5s ease-out 1;
}
    @keyframes blur {
        0%		{opacity: 0;}
        60%		{text-shadow:  0 0 33px #333; opacity:0;}
        80%		{text-shadow:  0 0 30px #333;}
        100%		{opacity: 1;}
    }
    @-webkit-keyframes blur {
        0%		{opacity: 0;}
        60%		{text-shadow:  0 0 33px #333; opacity:0;}
        80%		{text-shadow:  0 0 30px #333;}
        100%		{opacity: 1;}
    }
</style>