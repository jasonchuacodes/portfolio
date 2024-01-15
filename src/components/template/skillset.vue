<template>
  <div class="flex flex-col w-full gap-6">
    <div class="flex w-full justify-around">
      <BaseSkillCard title="frontend" :skills="['reactJS', 'vueJS']" />
      <BaseSkillCard title="backend" :skills="['laravel', 'nodeJS']" />
    </div>
    <div class="flex w-full justify-around">
      <BaseSkillCard title="database" :skills="['mysql', 'postgresql', 'prisma']" />
      <BaseSkillCard title="worflow" :skills="['prettier', 'tailwind', 'eslint']" />
      <BaseSkillCard title="tools" :skills="['git', 'docker', 'postman']" />
    </div>
  </div>
</template>
