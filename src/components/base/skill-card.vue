<script setup lang="ts">
type SkillCardProps = {
    title: string;
    skills: string[];
};

defineProps<SkillCardProps>();

const showSkillInfo = ref(false);

const handleHoverOut = () => {
    showSkillInfo.value = false;
};
const handleHoverIn = () => {
    showSkillInfo.value = true;
};
</script>
<template>
    <div
        @mouseenter="handleHoverIn"
        @mouseleave="handleHoverOut"
        class="card relative h-40 w-min-24 cursor-pointer"
    >
        <h2
            class="px-4 py-2 mb-4 font-russo text-center text-h4 tracking-wider capitalize"
            :class="{ 'text-primary-500': showSkillInfo }"
        >
            {{ title }}
        </h2>
        <Transition name="skill-info">
            <div v-if="showSkillInfo">
                <div
                    v-for="skill in skills"
                    class="flex justify-center text-center w-full p-1 text-white capitalize"
                >
                    <ul>
                        <li>{{ skill }}</li>
                    </ul>
                </div>
            </div>
        </Transition>
    </div>
</template>
<style scoped>
.card::before {
    content: "";
    border-top: 2px solid rgba(255,255,255,0.5);
    border-right: 1px solid rgba(255,255,255,0.5);
    border-left: 1px solid rgba(255,255,255,0.5);
    position: absolute;
    width: 100%;
    height: 4px;
    top: 0px;
    left: 0;
    transform: scaleX(1);
    transition: 0.3s;
    transition-timing-function: ease-out;
}
.card:hover::before {
    transform: scaleX(1);
    border-top: 2px solid rgba(255,255,255,0.8);
}
.card::after {
    content: "";
    border-bottom: 1px solid rgba(255,255,255,0.5);
    border-right: 1px solid rgba(255,255,255,0.5);
    border-left: 1px solid rgba(255,255,255,0.5);
    position: absolute;
    width: 100%;
    height: 10px;
    transform: scale(0);
    transition: 0.3s;
    transition-timing-function: ease-out;
}
.card:hover::after {
    transform: scale(1);
}
.skill-info-enter-active,
.skill-info-leave-active {
    transition: opacity 0.3s ease;
}

.skill-info-enter-from,
.skill-info-leave-to {
    opacity: 0;
}
</style>
