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
        <div class="scan fixed top-0 left-0 w-full">
            <div
                class="scanline-1 absolute left-0 top-0 h-[5px] w-full bg-white/5"
            ></div>
            <div
                class="scanline-2 absolute left-0 top-0 h-[30px] w-full bg-white/5"
            ></div>
        </div>
        <div
            :style="layer0"
            class="layer0 absolute w-full h-full bg-dots-pattern bg-repeat bg-cover opacity-[0.08] z-0"
        ></div>

        <div
            class="flex flex-col min-w-[560px] max-w-[640px] justify-center items-center space-y-16 text-light z-10"
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
