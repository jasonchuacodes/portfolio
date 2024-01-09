<template>
   <div class="flex w-full justify-around">
     <BaseSkillCard title="frontend" :skills="['typescript', 'reactJS', 'vueJS']" />
     <BaseSkillCard title="backend" :skills="['larvel', 'nestJS']" />
     <BaseSkillCard title="tools" :skills="['git', 'docker']" />
     <BaseSkillCard title="worflow" :skills="['prettier', 'tailwind']" />
   </div>
</template>
