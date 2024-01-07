<template>
    <div
        class="hero flex flex-col items-center justify-center w-full py-2 bg-white/10"
    >
        <h1 class="font-russo text-h1 tracking-wide uppercase text-onSurface">
            {{ title }}
        </h1>
        <p
            class="font-rubik text-l1-r tracking-widest font-sans uppercase text-primary-500"
        >
            {{ position }}
        </p>
    </div>
</template>
<script setup lang="ts">
type HeroBannerProps = {
    title: string;
    position: string;
};

defineProps<HeroBannerProps>();
</script>
<style scoped>
.hero {
    animation: rotating-border 3s ease-in-out 0s infinite forwards;
}

@keyframes rotating-border {
    0% {
        border-top: 1px solid rgba(255, 255, 255, 0);
        border-right: 1px solid rgba(255, 255, 255, 0.5);
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0);
    }
    25% {
        border-top: 1px solid rgba(255, 255, 255, 0);
        border-right: 1px solid rgba(255, 255, 255, 0);
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0.5);
    }
    50% {
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        border-right: 1px solid rgba(255, 255, 255, 0);
        border-bottom: 1px solid rgba(255, 255, 255, 0);
        border-left: 1px solid rgba(255, 255, 255, 0.5);
    }
    75% {
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        border-right: 1px solid rgba(255, 255, 255, 0.5);
        border-bottom: 1px solid rgba(255, 255, 255, 0);
        border-left: 1px solid rgba(255, 255, 255, 0);
    }
    100% {
        border-top: 1px solid rgba(255, 255, 255, 0);
        border-right: 1px solid rgba(255, 255, 255, 0.5);
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0);
    }
}
</style>
