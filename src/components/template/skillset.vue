<template>
    <div class="flex flex-col gap-16">
        <div class="flex w-full gap-8">
            <BaseSkillCard title="frontend" :skills="['reactJS', 'vueJS']" />
            <BaseSkillCard title="backend" :skills="['laravel', 'nodeJS']" />
            <BaseSkillCard title="design" :skills="['figma']" />
        </div>
        <div class="flex w-full gap-8">
            <BaseSkillCard
                title="database"
                :skills="['mySQL', 'postgreSQL', 'prisma']"
            />
            <BaseSkillCard
                title="workflow"
                :skills="['prettier', 'tailwind', 'eslint']"
            />
            <BaseSkillCard
                title="tools"
                :skills="['git', 'docker', 'postman']"
            />
        </div>
    </div>
</template>
