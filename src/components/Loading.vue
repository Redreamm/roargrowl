<template>
    <div class="classic-dots">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<style scoped>
/*---- Dot Dot Dot -----*/
.classic-dots {
  width: 3.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}
.classic-dots div {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #666;
  animation: fade 0.8s ease-in-out alternate infinite;
}
.classic-dots div:nth-of-type(1) {
  animation-delay: -0.4s;
}
.classic-dots div:nth-of-type(2) {
  animation-delay: -0.2s;
}
@keyframes fade {
  from {opacity: 1;}
  to {opacity: 0;}
}
</style>
