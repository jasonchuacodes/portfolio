<script setup lang="ts">
type HeroBannerProps = {
    title: string;
    position: string;
};

defineProps<HeroBannerProps>();
</script>
<template>
    <div
        class="flex flex-col items-center justify-center w-full py-2 bg-white/5 rotating-border"
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
