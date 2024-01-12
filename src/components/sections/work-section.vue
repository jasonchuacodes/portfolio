<script setup lang="ts">
import { vElementVisibility } from "@vueuse/components";
import projects from "@/data/projects";

const target = ref(null);
const { isVisible, onElementVisibility } = useElementVisibility("#work");

const activeId = 1;
</script>
<template>
    <div
        id="work"
        class="relative flex flex-col justify-center items-center w-full max-w-[640px] h-screen py-10 mb-60 space-y-10 overflow-hidden"
    >
        <div class="flex justify-center w-full mb-4">
            <BaseBanner
                ref="target"
                v-element-visibility="onElementVisibility"
                title="projects"
            />
        </div>
        <div
            v-if="isVisible"
            class="relative flex flex-col items-center justify-center w-full"
        >
            <!-- Cards -->
            <template v-for="{ id, mainTitle, subTitle } in projects">
                <BaseProjectCard
                    :id="id"
                    :main-title="mainTitle"
                    :sub-title="subTitle"
                />
            </template>
        </div>
    </div>
</template>
<styles scoped>
</styles>
