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
        class="card group relative flex justify-center items-center w-full h-[592px] transition-all ease-out duration-300 cursor-pointer text-light"
        :class="{
            odd: id % 2 !== 0,
            even: id % 2 == 0,
        }"
        @click="emit('open-modal', id, detail)"
    >
        <div
            class="flex flex-col h-full w-full justify-center items-center font-sans  group-hover:scale-110 transition-all ease-in duration-200"
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
        to bottom,
        transparent,
        rgba(255, 255, 255, 0.04),
        transparent
    );
}
.card.odd {
    transform: translateY(-200%);
    animation: slide-in-from-top 1s ease-in-out 0s forwards;
}
.card.even {
    transform: translateY(200%);
    animation: slide-in-from-bottom 1s ease-in-out 0s forwards;
}
/* Card y-border */
.card::after,
.card:last-child::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background: linear-gradient(
        to bottom,
        transparent,
        rgba(255, 255, 255, 0.5),
        transparent
    );
}
.card::before {
    right: 0;
}
.card::after {
    left: 0;
}
.card:hover {
    background: linear-gradient(
        to bottom,
        transparent,
        rgba(255, 255, 255, 0.10),
        transparent
    );
    color: white;
}
</style>
