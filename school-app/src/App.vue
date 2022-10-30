<script>
import StudentList from "@/components/students/StudentList.vue";

export default {
  name: "App",

  components: {
    StudentList,
  },

  data: () => ({
    //
  }),
};
</script>

<template>
  <v-app>
    <StudentList />
  </v-app>
</template>