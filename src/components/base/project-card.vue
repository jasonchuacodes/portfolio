<script setup lang="ts">
type ProjectCardProps = {
    id: number;
    mainTitle: string;
    subTitle: string;
    detail: string;
    activeId: number | null;
};

defineProps<ProjectCardProps>();
const emit = defineEmits<{
    (event: "open-modal", id: number, detail: string): void;
}>();
</script>
<template>
    <div
        class="card relative flex justify-center items-center w-full h-[120px] transition-all ease-out duration-300 cursor-pointer text-light"
        :class="{
            left: id % 2 !== 0,
            right: id % 2 == 0,
        }"
        @click="emit('open-modal', id, detail)"
    >
        <div
            class="flex flex-col h-full w-full justify-center items-center font-sans"
        >
            <span class="tracking-widest uppercase">
                {{ mainTitle }}
            </span>
            <span class="text-h3 font-russo tracking-wider uppercase">
                {{ subTitle }}
            </span>
        </div>
    </div>
</template>
<style scoped>
/* Card transitions */
.card {
    background: linear-gradient(
        to right,
        transparent,
        rgba(255, 255, 255, 0.04),
        transparent
    );
}
.card.left {
    transform: translateX(-100%);
    animation: slide-in-from-left 500ms ease-in-out 0s forwards;
}
.card.right {
    transform: translateX(100%);
    animation: slide-in-from-right 500ms ease-in-out 0s forwards;
}
.card:nth-child(1) {
    animation-delay: 0s;
}
.card:nth-child(2) {
    animation-delay: 200ms;
}
.card:nth-child(3) {
    animation-delay: 400ms;
}
.card:nth-child(4) {
    animation-delay: 600ms;
}
/* Card y-border */
.card::after,
.card:first-child::before {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    height: 1px;
    background: linear-gradient(
        to right,
        transparent,
        rgba(255, 255, 255, 0.5),
        transparent
    );
}
.card::before {
    top: 0;
}
.card::after {
    bottom: 0;
}
.card:hover {
    background: linear-gradient(
        to right,
        transparent,
        rgba(255, 255, 255, 0.05),
        transparent
    );
    color: white;
    scale: 1.05;
}
</style>
