<script setup>
import { vElementVisibility } from "@vueuse/components";

const target = ref(null);
const { onElementVisibility } = useElementVisibility("#home");
</script>
<template>
    <div
        id="home"
        class="flex flex-col justify-center items-center w-full max-w-[640px] h-screen py-10 space-y-16 text-light"
    >
        <BaseHeroBanner
            ref="target"
            v-element-visibility="onElementVisibility"
            title="Jason Clyde Chua"
            position="Web Developer"
        />
        <div class="flex justify-center indent-8 text-center w-full text-p1-r">
            Full stack web develop with a passion in technology and business.
            Full stack web develop with a passion in technology and business.
        </div>
        <TemplateSkillset />
    </div>
</template>
