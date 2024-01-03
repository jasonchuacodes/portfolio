<script setup lang="ts">
type ProjectCardProps = {
    title: string;
    filename: string;
};
defineProps<ProjectCardProps>();

</script>
<template>
    <div class="gradient-border">
        <div
            class="flex h-[96px] bg-light justify-center items-center overflow-hidden"
        >
        <img :src="`images/${filename}`" alt="project image">
        <!-- <img src='``@/public/project.png' alt="project image"> -->
        </div>
        <p class="font-russo text-h3">{{ title }}</p>
    </div>
</template>
<style scoped>
.gradient-border {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    row-gap: 24px;
    width: 169px;
}

.gradient-border::before,
.gradient-border::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background: linear-gradient(to bottom, transparent, #fff, transparent);
}

.gradient-border::before {
    left: 0;
}

.gradient-border::after {
    right: 0;
}
</style>
