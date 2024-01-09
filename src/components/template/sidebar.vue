<script setup lang="ts">
import { ref } from "vue";

const sidebarItems = [
    {
        id: 1,
        title: "HOME",
        linkTo: "#home",
        icon: "mdi:home",
    },
    {
        id: 2,
        title: "PROJECTS",
        linkTo: "#projects",
        icon: "mdi:work",
    },
    {
        id: 3,
        title: "ABOUT",
        linkTo: "#about",
        icon: "mdi:info",
    },
    {
        id: 4,
        title: "CONTACT",
        linkTo: "#contact",
        icon: "mdi:mail",
    },
];


const route = useRoute();
const currentHash = ref(
    process.client ? localStorage.getItem("currentHash") || "#home" : "#home"
);

onMounted(() => {
    if (process.client) {
        watch(
            () => route.hash,
            (newHash) => {
                currentHash.value = newHash;
                localStorage.setItem("currentHash", newHash);
            }
        );
    }
});

const findActiveLink = () => {
  const activeItem = sidebarItems.find(item => item.linkTo === currentHash.value);
  return activeItem ? activeItem.linkTo : null;
};

const githubLink = "https://github.com/jasonchuacodes";
const linkedInlink = "https://www.linkedin.com/in/jason-clyde-chua-65a322243/";
</script>
<template>
    <div
        class="sticky top-0 flex flex-col justify-between items-center h-screen w-40 py-6 bg-sidebar/50 z-50"
    >
        <p class="text-light text-l1-r">
            jason.<span class="text-primary-400">chua</span>
        </p>
        <div class="flex flex-col items-start w-full">
            <div class="flex w-full" v-for="{ id, title, icon, linkTo} in sidebarItems">
                    <BaseSidebarItem
                        :key="id"
                        :id="id"
                        :title="title"
                        :icon="icon"
                        :link-to="linkTo"
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
