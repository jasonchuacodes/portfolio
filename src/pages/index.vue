<script setup lang="ts">
import { useParallax } from "@vueuse/core";

const target = ref(null);
const parallax = reactive(useParallax(target));

const layer0 = computed(() => ({
    transform: `translateX(${parallax.tilt * 50}px) translateY(${
        parallax.roll * 50
    }px)`,
}));
</script>
<template>
    <div
        ref="target"
        class="relative flex w-full h-full justify-center items-center transition-all ease-out duration-600 overflow-hidden"
    >
        <div class="fixed h-screen top-0 left-0 w-full z-0">
            <div
                class="box box-1 absolute -translate-y-[300px] left-[980px] top-[20px] w-[90px] h-[130px] bg-white/10"
            ></div>
            <div
                class="box box-2 absolute -translate-y-[300px] left-[1370px] top-[260px] w-[60px] h-[180px] bg-white/10"
            ></div>
            <div
                class="box box-3 absolute -translate-y-[300px] left-[760px] top-[30px] w-[110px] h-[160px] bg-white/10"
            ></div>
            <div
                class="box box-4 absolute -translate-y-[300px] left-[170px] top-[80px] w-[170px] h-[100px] bg-white/10"
            ></div>
            <div
                class="box box-5 absolute -translate-y-[300px] left-[990px] top-[50px] w-[140px] h-[150px] bg-white/10"
            ></div>
            <div
                class="box box-6 absolute -translate-y-[300px] left-[1670px] top-[10px] w-[80px] h-[90px] bg-white/10"
            ></div>
            <div
                class="box box-7 absolute -translate-y-[300px] left-[1260px] top-[70px] w-[130px] h-[150px] bg-white/10"
            ></div>
            <div
                class="box box-8 absolute -translate-y-[300px] left-[430px] top-[40px] w-[100px] h-[170px] bg-white/10"
            ></div>
            <div
                class="box box-9 absolute -translate-y-[300px] left-[860px] top-[90px] w-[50px] h-[160px] bg-white/10"
            ></div>
            <div
                class="box box-10 absolute -translate-y-[300px] left-[140px] top-[50px] w-[120px] h-[140px] bg-white/10"
            ></div>
            <div
                class="box box-11 absolute -translate-y-[300px] left-[1230px] top-[10px] w-[90px] h-[130px] bg-white/10"
            ></div>
            <div
                class="box box-12 absolute -translate-y-[300px] left-[390px] top-[80px] w-[60px] h-[80px] bg-white/10"
            ></div>
            <div
                class="box box-13 absolute -translate-y-[300px] left-[520px] top-[50px] w-[120px] h-[160px] bg-white/10"
            ></div>
            <div
                class="box box-14 absolute -translate-y-[300px] left-[1770px] top-[20px] w-[70px] h-[100px] bg-white/10"
            ></div>
            <div
                class="box box-15 absolute -translate-y-[300px] left-[96px] top-[70px] w-[40px] h-[110px] bg-white/10"
            ></div>
        </div>

        <div class="scan fixed top-0 left-0 w-full z-10">
            <div
                class="scanline-1 absolute left-0 top-0 h-[5px] w-full bg-white/5"
            ></div>
            <div
                class="scanline-2 absolute left-0 top-0 h-[30px] w-full bg-white/5"
            ></div>
        </div>
        <div
            :style="layer0"
            class="layer0 absolute w-full h-full bg-dots-pattern bg-cover blur-lg opacity-[0.5] z-0"
        ></div>

        <div
            class="flex flex-col min-w-[560px] max-w-[640px] justify-center items-center space-y-16 text-light z-30"
        >
            <TemplateHeroBanner
                title="jason clyde chua"
                position="web developer"
            />
            <div
                class="flex w-full justify-center indent-8 text-center text-p1-r"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex
                hic neque quas blanditiis aperiam debitis quibusdam quis
                suscipit a, voluptatum labore nulla tempore reprehenderit!
                Commodi ipsum eveniet veritatis beatae!
            </div>
            <TemplateSkillSection />
        </div>
    </div>
</template>
<style scoped>
.box-1 {
    animation: falling 10s linear 0s infinite forwards;
}

.box-2 {
    animation: falling 8s linear 2s infinite forwards;
}

.box-3 {
    animation: falling 12s linear 4s infinite forwards;
}

.box-4 {
    animation: falling 6s linear 1s infinite forwards;
}

.box-5 {
    animation: falling 9s linear 3s infinite forwards;
}

.box-6 {
    animation: falling 11s linear 2s infinite forwards;
}

.box-7 {
    animation: falling 7s linear 1s infinite forwards;
}

.box-8 {
    animation: falling 10s linear 4s infinite forwards;
}

.box-9 {
    animation: falling 8s linear 3s infinite forwards;
}

.box-10 {
    animation: falling 12s linear 0s infinite forwards;
}

.box-11 {
    animation: falling 9s linear 1s infinite forwards;
}

.box-12 {
    animation: falling 6s linear 3s infinite forwards;
}

.box-13 {
    animation: falling 10s linear 2s infinite forwards;
}

.box-14 {
    animation: falling 8s linear 0s infinite forwards;
}

.box-15 {
    animation: falling 11s linear 4s infinite forwards;
}

@keyframes falling {
    0% {
        transform: translateZ(0);
    }
    50% {
        transform: translate3d(0, 100vh, 0);
        opacity: 0.2;
    }
    100% {
        transform: translate3d(0, 100vh, 0);
        opacity: 0;
    }
}

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
