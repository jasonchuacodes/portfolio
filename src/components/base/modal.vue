<script setup lang="ts">
import { DetailProps } from "./project-card.vue";

type ModalProps = {
    detail: DetailProps;
    mainTitle: string;
    subTitle?: string;
    technologies: string[];
    showModal: boolean;
};

const { detail, mainTitle, showModal } = defineProps<ModalProps>();
const { overview, achievement, contributions } = detail;
const emit = defineEmits<{
    (event: "close-modal"): void;
}>();
</script>

<template>
    <!-- Modal -->
    <div
        v-if="showModal"
        class="detail absolute flex flex-col items-center h-full overflow-y-auto gap-10 px-16 py-8 min-h-1/2 w-11/12 text-light bg-light/5 backdrop-blur-sm z-50"
    >
        <!-- Detail header -->
        <div
            class="absolute top-0 right-0 -translate-x-1/2 translate-y-1/2"
            @click="emit('close-modal')"
        >
            <BaseButton icon-name="mdi:close" />
        </div>
        <div class="flex w-full justify-center items-center font-sans">
            <span class="text-h2 font-russo tracking-wider uppercase">
                {{ mainTitle }} {{ subTitle }}
            </span>
        </div>
        <!-- Detail -->
        <div class="">
            <p class="text-l1-b">Overview:</p>
            <p class="indent-4">{{ overview }}</p>
        </div>

        <div class="">
            <p class="text-l1-b">Contributions:</p>
            <p class="indent-4">{{ contributions }}</p>
        </div>
        <div v-if="achievement" class="flex flex-col">
            <p class="text-l1-b">Achievements:</p>
            <p class="indent-4">{{ achievement }}</p>
        </div>
        <!-- Tech stack -->
        <div class="flex flex-col w-full">
            <p class="text-l1-b">Tech stack:</p>
            <div class="flex justify-center space-x-4">
                <template v-for="tech in technologies">
                    <p>{{ tech }}</p>
                </template>
            </div>
        </div>
    </div>
</template>
<style scoped>
.detail {
    opacity: 0;
    transition-duration: 300s;
    transform: translateY(120%);
    animation: slide-in-from-bottom 500ms ease-out 0s forwards;
}

@keyframes slide-in-from-bottom {
    0% {
        opacity: 0;
        transform: translateY(120%);
    }
    100% {
        opacity: 1;
        transform: translateY(0%);
    }
}
</style>
