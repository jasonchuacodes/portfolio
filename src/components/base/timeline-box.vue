<script setup lang="ts">
type TimelineBoxProps = {
    position: string;
    shortName: string;
    name: string;
    period: string;
    description: string;
};
defineProps<TimelineBoxProps>();
</script>
<template>
    <!-- Timeline box container -->
    <div
        class="container relative w-1/2 pt-10"
        :class="position == 'left' ? 'left-0 pr-20' : 'left-1/2 pl-20'"
    >
        <!-- Logo container -->
        <div
            class="logo absolute flex justify-center items-center h-12 w-12 border-light border-[1px] z-10 font-russo text-h4 bg-light/20"
            :class="
                position == 'left'
                    ? 'right-0 -translate-x-1/2 left-line'
                    : 'left-0 translate-x-1/2 right-line'
            "
        >
            {{ shortName }}
        </div>

        <!-- Text box container -->
        <div
            class="text-box relative flex flex-col px-2"
            :class="position == 'left' ? 'items-end' : ''"
        >
            <h2
                class="font-russo text-h3 text-primary-500/80"
                :class="position == 'left' ? 'text-end' : 'text-start'"
            >
                {{ name }}
            </h2>
            <small>{{ period }}</small>
            <p :class="position == 'left' ? 'text-end' : 'text-start'">
                {{ description }}
            </p>
        </div>
    </div>
</template>
<style scoped>
.container {
    animation: movedown 1s linear forwards;
    opacity: 0;
}

@keyframes movedown {
    0%{ 
        opacity: 0;
        transform: translateY(-30px);
    }
    100%{ 
        opacity: 1;
        transform: translateY(0);
    }
}
.container:nth-child(1) {
    animation-delay: 0s;
}
.container:nth-child(2) {
    animation-delay: 1s;
}
.container:nth-child(3) {
    animation-delay: 2s;
}
.container:nth-child(4) {
    animation-delay: 3s;
}

.logo::after {
    content: "";
    height: 0;
    width: 50%;
    border: 1px solid rgba(160, 167, 173, 0.5);
    position: absolute;
}
.logo.left-line::after {
    right: 0;
    transform: translateX(100%);
}
.logo.right-line::after {
    left: 0;
    transform: translateX(-100%);
}
</style>
