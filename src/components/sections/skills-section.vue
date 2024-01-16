<script setup>
import { vElementVisibility } from "@vueuse/components";

const target = ref(null);
const { isVisible, onElementVisibility } = useElementVisibility("#skills");
</script>
<template>
    <div
        id="skills"
        class="flex flex-col justify-center items-center h-screen py-10 w-full max-w-[640px] space-y-16 text-light"
    >
        <BaseBanner
            ref="target"
            v-element-visibility="onElementVisibility"
            title="skills"
        />
        <div
            v-if="isVisible"
            class="skillset flex flex-col justify-center items-center space-y-8 w-full"
        >
            <p>
                Through continuous upskilling via courses and mentorship, I've
                refined my proficiency in Frontend and Backend technologies,
                complemented by a knack for web design.
            </p>
            <TemplateSkillset />
        </div>
    </div>
</template>
<style scoped>
.skillset {
    opacity: 0;
    animation: fade-in 1s ease-in-out 0s forwards;
}
</style>
