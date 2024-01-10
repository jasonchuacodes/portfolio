<script setup lang="ts">
  type TimelineBoxProps = {
    position: string;
  };
  defineProps<TimelineBoxProps>();
</script>
<template>
  <div
    class="container relative px-12 w-1/2 py-4 bg-white/0"
    :class="position == 'right' ? 'left-1/2' : 'left-0'"
  >
    <div
      class="absolute w-10 h-10 top-1/2 -translate-y-1/2 bg-dark/40"
      :class="position == 'right' ? '-left-[20px]' : '-right-[20px]'"
    >
      X
    </div>
    <div class="text-box relative py-4 px-12 bg-white/40">
      <h2>Alphabet Inc.</h2>
      <small>2018-2019</small>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fuga
        soluta beatae in ipsam eos ra.
      </p>
    </div>
  </div>
</template>

