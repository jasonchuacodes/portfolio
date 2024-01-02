<script setup>
useHead({
    title: "Jason - Portfolio",
    link: [
        // create a favicon.ico file in the public dir
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        { rel: "icon", type: "image/x-icon", href: "none" },
    ],
});
</script>
<template>
    <div ref="target" class="relative flex w-full h-screen bg-default text-white">
        <Sidebar />
        <div class="flex flex-1 h-full items-center justify-center">
            <slot />
        </div>
    </div>
</template>
