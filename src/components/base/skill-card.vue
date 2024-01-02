<template>
  <div
    @mouseenter="handleHoverIn"
    @mouseleave="handleHoverOut"
    class="card relative h-40 w-min-24 cursor-pointer"
  >
    <h2
      class="p-2 text-center text-h4 mb-4 font-russo tracking-widest capitalize"
      :class="{ 'text-primary-500': showSkillInfo }"
    >
      {{ title }}
    </h2>
    <Transition name="skill-info">
      <div v-if="showSkillInfo">
        <div
          v-for="skill in skills"
          class="p-1 flex w-full justify-center text-center text-white capitalize"
        >
          <ul>
            <li>{{ skill }}</li>
          </ul>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  type ButtonProps = {
    title: string;
    skills: string[];
  };

  defineProps<ButtonProps>();

  const showSkillInfo = ref(false);

  const handleHoverOut = () => {
    showSkillInfo.value = false;
  };
  const handleHoverIn = () => {
    showSkillInfo.value = true;
  };
</script>

<style scoped>
  .card::before {
    content: "";
    border-top: 1px solid white;
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0;
    transform: scaleX(0);
    transition: 0.3s;
    transition-timing-function: ease-in-out;
  }
  .card:hover::before {
    transform: scaleX(1);
  }
  .card::after {
    content: "";
    border-bottom: 2px solid white;
    position: absolute;
    width: 100%;
    top: 10px;
    bottom: 0;
    transform: scale(0);
    transition: 0.3s;
    transition-timing-function: ease-in-out;
  }
  .card:hover::after {
    transform: scale(1);
  }
  .skill-info-enter-active,
  .skill-info-leave-active {
    transition: opacity 0.3s ease;
  }

  .skill-info-enter-from,
  .skill-info-leave-to {
    opacity: 0;
  }
</style>

