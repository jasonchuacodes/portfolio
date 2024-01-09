<script setup lang="ts">
type ProjectCardProps = {
    id: number;
    title: string;
    filename: string;
    activeId: number;
    projectDetail: string;
};

type ProjectCardEmits = {
    (e: 'set-active-card', id: number): void,
    (e: 'set-detail', detail: string): void,
};

defineProps<ProjectCardProps>();
defineEmits<ProjectCardEmits>();
</script>
<template>
    <div
        @click="$emit('set-active-card', id), $emit('set-detail', projectDetail)"
        class=" card-container relative transition-all ease-out duration-300 cursor-pointer"
        :class="{
            'opacity-100': activeId == id,
            'opacity-50': activeId !== id,
            'hover:opacity-75': activeId !== id,
            'text-primary-500': activeId == id
        }"
    >
        <div
            class="flex h-[96px] bg-light justify-center items-center overflow-hidden"
        >
            <img
                :src="`images/${filename}`"
                :alt="`${filename}`"
                class="transition-all ease-out duration-300"
                :class="{ 'scale-150': activeId == id }"
            />
        </div>
        <p class="font-russo text-h4 tracking-widest">{{ title }}</p>
    </div>
</template>
<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    row-gap: 24px;
    width: 169px;
    padding: 0 1px;
}

.card-container::before,
.card-container::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background: linear-gradient(to bottom, transparent, #fff, transparent);
}

.card-container::before {
    left: 0;
}

.card-container::after {
    right: 0;
}
</style>
