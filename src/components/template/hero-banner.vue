<template>
  <div class="hero">
    <div class="content">
      <h1 class="font-russo text-h1 text-white uppercase">{{ title }}</h1>
      <p
        class="font-rubik text-l1-r tracking-widest font-sans text-primary-500 lowercase"
      >
        {{ position }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
  type HeroBannerProps = {
    title: string;
    position: string;
  };

  defineProps<HeroBannerProps>();
</script>
<style scoped>
  .hero {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: transparent;
    overflow: hidden;
  }
  .hero::before {
    content: "";
    position: absolute;
    width: 140%;
    height: 50%;
    background: #a0a7ad;
    animation: animate 4s linear infinite;
  }
  .hero::after {
    content: "";
    position: absolute;
    inset: 2px;
    background: rgb(14, 18, 25);
  }
  .content {
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    align-items: center;
    position: relative;
    color: #fff;
    z-index: 10;
    justify-content: center;
  }
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(350deg);
    }
  }
</style>

