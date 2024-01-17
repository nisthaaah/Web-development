<template>
    <header>
        <h1>{{ title }}</h1>
        <TaskButton @btn-click="$emit('toggle-add-task')" text = "Add Task" color="green" />
    </header>

</template>

<script>
import TaskButton from './Button.vue';
export default{
    name: 'TaskHeader',
    props:{
        title : String
    },
    components: {
        TaskButton,
    }
}
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>