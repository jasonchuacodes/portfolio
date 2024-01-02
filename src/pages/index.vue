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
        <div
            :style="layer0"
            class="absolute w-full h-full bg-dots-pattern bg-repeat bg-cover opacity-[0.08] z-0"
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
