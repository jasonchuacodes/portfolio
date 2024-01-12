<script setup lang="ts">
type BannerProps = {
    title: string;
};

defineProps<BannerProps>();
</script>
<template>
    <div
        class="flex flex-col items-center justify-center w-full max-w-[520px] py-2 bg-white/5 rotating-border"
    >
        <h2 class="font-russo text-h3 tracking-wide uppercase text-onSurface">
            {{ title }}
        </h2>
    </div>
</template>
