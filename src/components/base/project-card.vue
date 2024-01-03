<script setup lang="ts"></script>
<template>
  <div class="gradient-border">
    <div class="flex h-[96px] bg-light justify-center items-center overflow-hidden">
      <img src="../../assets/sample-project.png" alt="">
    </div>
    <p class="text-h3">PROJECT</p>
  </div>
</template>
<style scoped>
 .gradient-border {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 400px;
      row-gap: 32px;
      width: 169px;
    }

    .gradient-border::before,
    .gradient-border::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 1px; 
      background: linear-gradient(to bottom, transparent, #fff, transparent); /* Gradient for the left and right borders */
    }

    .gradient-border::before {
      left: 0;
    }

    .gradient-border::after {
      right: 0;
    }</style>