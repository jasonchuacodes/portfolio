<script setup>
  import { vElementVisibility } from "@vueuse/components";

  const target = ref(null);
  const { onElementVisibility } = useElementVisibility("#home");

  const githubLink = "https://github.com/jasonchuacodes";
  const linkedInlink =
    "https://www.linkedin.com/in/jason-clyde-chua-65a322243/";
</script>
<template>
  <div
    id="home"
    class="flex flex-col justify-center items-center w-full max-w-[640px] h-screen py-10 space-y-16 text-light"
  >
    <BaseHeroBanner
      ref="target"
      v-element-visibility="onElementVisibility"
      title="Jason Clyde Chua"
      position="Web Developer"
    />
    <div class="flex justify-center indent-8 text-center w-full text-h4">
      Passionate full-stack web developer with an enthusiasm for learning and applying new tech. Has an eager fondness and proficiency in JavaScript, Typescipt, and NodeJS.
    </div>
    <div class="flex space-x-4">
      <BaseIconLink
        class="!h-12 !w-12"
        icon-name="mdi:github"
        :link="githubLink"
      />
      <BaseIconLink
        class="!h-12 !w-12"
        icon-name="mdi:linkedin"
        :link="linkedInlink"
      />
    </div>
  </div>
</template>

