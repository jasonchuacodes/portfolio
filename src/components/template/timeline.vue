<script setup lang="ts">
import timelineItems from "@/data/timeline-items";
</script>
<template>
    <div class="timeline relative flex flex-col max-w-4xl mx-auto">
        <template
            v-for="{
                position,
                name,
                shortName,
                period,
                description,
            } in timelineItems"
        >
            <BaseTimelineBox
                :position="position"
                :name="name"
                :shortName="shortName"
                :period="period"
                :description="description"
            />
        </template>
    </div>
</template>
<style scoped>
.timeline::after {
    content: "";
    height: 100%;
    border: 2px solid rgba(160, 167, 173, 0.5);
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    position: absolute;
    animation: moveline 2s linear forwards;
}

@keyframes moveline {
    0% {
        height: 0;
    }
    100% {
        height: 100%;
    }
}
.timeline::before {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 7px 0;
    border-color: rgba(160, 167, 173, 0.5) transparent transparent;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    animation: arrow 0s linear 2s forwards;
    opacity: 0;
}
@keyframes arrow {
    0% {
        height: 0;
    }
    100% {
        height: 100%;
        opacity: 1;
    }
}
</style>
