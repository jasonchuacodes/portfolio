<script setup lang="ts">
  type ModalProps = {
    detail: string;
    mainTitle: string;
    subTitle?: string;
    technologies: string[];
    showModal: boolean;
  };

  const { detail, mainTitle, showModal } = defineProps<ModalProps>();
  const emit = defineEmits<{
    (event: "close-modal"): void;
  }>();
</script>

<template>
  <!-- Modal -->
  <div
    v-if="showModal"
    class="detail absolute flex flex-col items-center gap-10 px-16 py-8 min-h-1/2 w-11/12 text-light bg-light/5 backdrop-blur-sm z-50"
  >
    <!-- Detail header -->
    <div
      class="absolute top-0 right-0 -translate-x-1/2 translate-y-1/2"
      @click="emit('close-modal')"
    >
      <BaseButton icon-name="mdi:close" />
    </div>
    <div class="flex w-full justify-center items-center font-sans">
      <span class="text-h2 font-russo tracking-wider uppercase">
        {{ mainTitle }} {{ subTitle }}
      </span>
    </div>
    <!-- Detail -->
    <div class="text-center">
      {{ detail }}
    </div>
    <!-- Tech stack -->
    <div class="flex gap-4">
      <template v-for="tech in technologies">
        <Icon name="mdi:react" class="w-10 h-10" />
      </template>
    </div>
  </div>
</template>
<style scoped>
  .detail {
    opacity: 0;
    transition-duration: 300s;
    transform: translateY(120%);
    animation: slide-in-from-bottom 500ms ease-out 0s forwards;
  }

  @keyframes slide-in-from-bottom {
    0% {
      opacity: 0;
      transform: translateY(120%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
</style>

