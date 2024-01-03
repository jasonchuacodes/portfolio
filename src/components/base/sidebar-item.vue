<script setup lang="ts">
type SidebarItemProps = {
    title: string;
    iconName: string;
    isActiveSidebarId: number;
    id: number;
    linkTo: string;
};
defineProps<SidebarItemProps>();
</script>
<template>
    <NuxtLink
        :to="linkTo"
        :class="[
            'flex justify-start items-center w-full h-16 space-x-4 px-6 py-2 text-light text-p1-r hover:bg-sidebarHover hover:cursor-pointer  transition-all duration-200 ease-in',
            { 'bg-sidebarHover border-r-[1px]': isActiveSidebarId == id },
        ]"
    >
        <Icon v-if="iconName" :name="iconName" class="w-4 h-4" /><span>{{
            title
        }}</span>
    </NuxtLink>
</template>
