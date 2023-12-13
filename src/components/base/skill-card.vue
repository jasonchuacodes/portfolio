<template>
  <div
    @mouseenter="handleHoverIn"
    @mouseleave="handleHoverOut"
    class="card relative h-40 w-24 cursor-pointer"
  >
    <h2
      class="text-transform-capitalize p-2 text-center text-h4 font-russo tracking-widest text-primary-500"
    >
      title
    </h2>
    <Transition name="skill-info">
      <div v-if="showSkillInfo">
        <div class="p-2 flex w-full justify-center text-center">
          <ul>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
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
  .text-transform-capitalize {
    text-transform: capitalize;
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

