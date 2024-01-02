<template>
    <div class="ac-container ac-one">
        <slot><img src="/flux.svg" width="456" height="342" /></slot>
        <div class="caption">
            <h2>
                <slot name="title"><span style="color:black;">?</span></slot>
            </h2>
            <p>
                <slot name="numbofsounds"></slot>
            </p>
        </div>
    </div>
</template>

<script>

</script>

<style>
.ac-container, .ac-container span {
    width: 100%;
    height: 100%;

  display: flex;
}
.ac-container span img, .ac-container img {
    transition: transform .5s;
    background-image: url(/flux.svg);
    background-color: #e2e2e2;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.ac-container h1 {
    margin-top: 0;
    flex-basis: 100%;
    text-align: center;
    color: white;
}

.ac-container h1 span {
    color: #33cc33;
}

.ac-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    border-radius: 0.525rem;
}

.ac-container .caption {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}

.ac-container .caption h2 {
    text-transform: uppercase;
    text-align: center;
}



/* First Caption Effects */
.ac-one .caption {
    color: white;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.3);
    transition: opacity .2s;
}

.ac-one:hover .caption {
    opacity: 1;
}

.ac-one:hover img {
    transform: scale(1.1);
}
</style>
