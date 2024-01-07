<script setup lang="ts">
const projects = [
    {
        id: 1,
        title: "Project 1",
        filename: "project.png",
        detail: "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a",
    },
    {
        id: 2,
        title: "Project 2",
        filename: "project.png",
        detail: "unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It ",
    },
    {
        id: 3,
        title: "Project 3",
        filename: "project.png",
        detail: " Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consesum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, fro",
    },
    {
        id: 4,
        title: "Project 4",
        filename: "project.png",
        detail: "on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section ",
    },
];

const activeId = ref(1);
const details = ref(projects[0].title);

const setActiveCard = (id: number) => {
    activeId.value = id;
};

const setProjectDetail = (info: string) => {
    details.value = info;
};
</script>
<template>
    <div
        class="flex flex-col justify-center items-center h-screen space-y-10 overflow-hidden"
    >
        <div class="flex w-full mx-auto justify-center space-x-4">
            <div v-for="project in projects">
                <BaseProjectCard
                    :id="project.id"
                    :title="project.title"
                    :filename="project.filename"
                    :project-detail="project.detail"
                    :activeId="activeId"
                    @set-active-card="setActiveCard"
                    @set-detail="setProjectDetail"
                />
            </div>
        </div>
        <div
            class="relative max-w-[640px] h-56 mx-auto overflow-auto text-light"
        >
            <label
                class="flex w-full sticky top-0 text-l1-r uppercase tracking-widest p-2 bg-neutral/50"
                >Details:
            </label>
            <p class="text-p2-r p-2">{{ details }}</p>
        </div>
    </div>
</template>
