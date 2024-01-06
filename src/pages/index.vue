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
        class="relative flex justify-center items-center w-full h-full overflow-hidden transition-all ease-out duration-600"
    >
        <BaseFallingBoxes />
        <div
            :style="layer0"
            class="layer0 absolute w-full h-full z-0 bg-dots-pattern bg-cover blur-lg opacity-[0.5]"
        ></div>

        <div
            class="flex flex-col justify-center items-center min-w-[560px] max-w-[640px] space-y-16 z-30 text-light"
        >
            <TemplateHeroBanner
                title="Jason Clyde Chua"
                position="Web Developer"
            />
            <div
                class="flex justify-center indent-8 text-center w-full text-p1-r"
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
