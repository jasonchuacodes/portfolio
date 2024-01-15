<script setup>
  import { vElementVisibility } from "@vueuse/components";

  const target = ref(null);
  const { onElementVisibility } = useElementVisibility("#skills");
</script>
<template>
  <div
    id="skills"
    class="flex flex-col justify-center items-center h-screen py-10 w-full max-w-[640px] space-y-16 text-light"
  >
    <BaseBanner
      ref="target"
      v-element-visibility="onElementVisibility"
      title="Skills"
    />
    <TemplateSkillset />
  </div>
</template>

