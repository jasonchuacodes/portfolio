<script setup>
  import { vElementVisibility } from "@vueuse/components";

  const target = ref(null);
  const { onElementVisibility } = useElementVisibility("#contact");
</script>
<template>
  <div
    id="contact"
    class="flex flex-col justify-center items-center h-screen py-10 max-w-[640px] space-y-16 text-light"
  >
    <BaseBanner
      ref="target"
      v-element-visibility="onElementVisibility"
     title="contact"
    />
    <div class="flex justify-center indent-8 text-center w-full text-p1-r">
      Full stack web develop with a passion in technology and business. Full
      stack web develop with a passion in technology and business.
    </div>
    <TemplateSkillset />
  </div>
</template>

