<script setup>
useHead({
    title: "Jason - Portfolio",
    link: [
        // create a favicon.ico file in the public dir
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        { rel: "icon", type: "image/x-icon", href: "none" },
    ],
});

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
        class="relative flex w-full items-start bg-default text-white"
    >
        <div
            :style="layer0"
            class="z-0 fixed left-0 top-0 w-full h-full opacity-[0.03] bg-circuit-pattern bg-repeat"
        ></div>
        <TemplateSidebar />
        <!-- <BaseScanLines /> -->
        <BaseFallingBoxes />
        <div class="flex flex-1 justify-center items-center overflow-auto">
            <slot />
        </div>
    </div>
</template>
