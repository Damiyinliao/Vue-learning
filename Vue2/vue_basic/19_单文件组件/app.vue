<template>
  <div>
    <School/>
    <Student/>
  </div>
</template>

<script>

import School from './school.vue'
import Student from './student.vue'

export default {
    name:'App',
    components:{
        School,
        Student
    }
}
</script>

<style>

</style>