<script setup lang="ts">
type SkillCardProps = {
    title: string;
    skills: string[];
};

defineProps<SkillCardProps>();
</script>
<template>
    <div class="card group relative min-h-40 w-32 py-2 cursor-pointer hover:bg-white/5 transition-all ease-in duration-200">
        <h2
            class="px-4 py-2 mb-4 font-russo text-center text-h4 tracking-wider capitalize group-hover:text-primary-500 group-hover:scale-105 transition-all ease-in duration-200"
        >
            {{ title }}
        </h2>
        <div
            v-for="skill in skills"
            class="flex justify-center text-center w-full p-1 text-white capitalize"
        >
            <ul>
                <li>{{ skill }}</li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.card::before {
    content: "";
    border: 1px solid rgba(255, 255, 255, 0.5);
    position: absolute;
    width: 100%;
    height: 1px;
    top: 0px;
    left: 0px;
}
.card::after {
    content: "";
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0px;
    left: 0px;
}
</style>
