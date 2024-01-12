<script setup lang="ts">
type ButtonProps = {
    iconName: string;
    className?: string;
};

defineProps<ButtonProps>();
</script>
<template>
    <div
        class="flex justify-center items-center w-10 h-10 hover:bg-white/5 transition-all ease-in duration-100 cursor-pointer"
        :class="className"
    >
        <Icon :name="iconName" class="h-10 w-10" />
    </div>
</template>
