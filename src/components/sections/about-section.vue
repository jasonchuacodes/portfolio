<script setup>
  import { vElementVisibility } from "@vueuse/components";

  const target = ref(null);
  const { onElementVisibility } = useElementVisibility("#about");
</script>
<template>
  <div
    id="about"
    class="flex flex-col justify-center items-center min-h-screen w-full py-10 space-y-16 text-light"
  >
    <div class="flex w-full max-w-[640px]">
      <TemplateHeroBanner
        ref="target"
        v-element-visibility="onElementVisibility"
        title="timeline"
      />
    </div>
    <TemplateTimeline />
  </div>
</template>

