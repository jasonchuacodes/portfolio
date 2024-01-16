<script setup>
import { vElementVisibility } from "@vueuse/components";

const target = ref(null);
const { onElementVisibility, isVisible } = useElementVisibility("#work");
</script>
<template>
    <div
        ref="target"
        id="work"
        class="flex flex-col justify-center items-center w-full min-h-screen py-10 space-y-16 text-light"
    >
        <BaseBanner
            v-element-visibility="onElementVisibility"
            title="work experience"
        />
        <template v-if="isVisible">
            <TemplateTimeline />
        </template>
    </div>
</template>
