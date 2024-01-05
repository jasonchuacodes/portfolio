<template>
    <div class="scan fixed top-0 left-0 w-full z-10">
        <div
            class="scanline-1 absolute left-0 top-0 h-[5px] w-full bg-white/5"
        ></div>
        <div
            class="scanline-2 absolute left-0 top-0 h-[30px] w-full bg-white/5"
        ></div>
    </div>
</template>
<style scoped>
.scanline-1 {
    animation: scan 6s linear 1.3s infinite forwards;
}

.scanline-2 {
    animation: scan 8s linear 0s infinite forwards;
}

@keyframes scan {
    0% {
        transform: translateZ(0);
    }
    50% {
        transform: translate3d(0, 100vh, 0);
    }
    100% {
        transform: translate3d(0, 100vh, 0);
    }
}

.scan {
    animation: flicker 0.35s infinite;
}

@keyframes flicker {
    0% {
        opacity: 1;
    }
    25% {
        opacity: 0.8;
    }
    35% {
        opacity: 1;
    }
    38% {
        opacity: 0.1;
    }
    40% {
        opacity: 0.8;
    }
    80% {
        opacity: 1;
    }
}
</style>
