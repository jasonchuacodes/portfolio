<template>
    <div
        class="flex flex-col justify-between items-center w-40 py-6 bg-sidebar"
    >
        <p class="text-light text-l1-r">
            jason.<span class="text-primary-400">chua</span>
        </p>
        <div class="flex flex-col items-start w-full">
            <div class="flex w-full" v-for="sidebarItem in sidebarItems">
                <BaseSidebarItem
                    :key="sidebarItem.id"
                    :id="sidebarItem.id"
                    :title="sidebarItem.title"
                    :icon-name="sidebarItem.iconName"
                    :is-active-sidebar-id="isActiveSidebarId"
                    @click="setSidebarItemIsActive(sidebarItem.id)"
                    :link-to="sidebarItem.link"
                ></BaseSidebarItem>
            </div>
        </div>
        <div class="space-x-4">
            <BaseSidebarIconLink icon-name="mdi:github" :link="githubLink" />
            <BaseSidebarIconLink
                icon-name="mdi:linkedin"
                :link="linkedInlink"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const isActiveSidebarId = ref(1);
const sidebarItems = [
    {
        id: 1,
        title: "HOME",
        link: "/",
        iconName: "mdi:home",
    },
    {
        id: 2,
        title: "WORK",
        link: "/work",
        iconName: "mdi:work",
    },
    {
        id: 3,
        title: "ABOUT",
        link: "/about",
        iconName: "mdi:info",
    },
    {
        id: 4,
        title: "CONTACT",
        link: "/contact",
        iconName: "mdi:mail",
    },
];

const githubLink = "https://github.com/jasonchuacodes";
const linkedInlink = "https://www.linkedin.com/in/jason-clyde-chua-65a322243/";
const setSidebarItemIsActive = (id: number) => {
    isActiveSidebarId.value = id;
};
</script>
