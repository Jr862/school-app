<script>
import StudentService from "@/services/Students.service";
export default {
  name: "student-list",

  components: {
    StudentModal: () => import("@/components/students/StudentModal.vue"),
  },

  data: () => ({
    header: [
      { text: "#ID", value: "id" },
      { text: "Nome", value: "name" },
      { text: "Idade", value: "age" },
      { text: "Gênero", value: "sex" },
      { text: "Ações", value: "actions" },
    ],
    students: [],

    genderList: {
      F: "Feminino",
      M: "Masculino",
    },
  }),

  created() {
    this.getStudents();
  },

  methods: {
    async getStudents() {
      const result = await StudentService.select();
      this.students = result.data;
    },

    async deleteItem(item) {
      await StudentService.remove(item.id);
      this.getStudents();
    },

    async editItem(item) {
      this.$refs.studentModal.edit(item);
    },

    async createStudent() {
      this.$refs.studentModal.createStudent();
    },
  },
};
</script>

<template>
  <v-container>
    <v-card>
      <v-btn @click="createStudent"> Criar novo aluno </v-btn>
      <v-data-table :headers="header" :items="students" hide-default-footer>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small @click="editItem(item)" color="blue">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)" color="red">
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:[`item.sex`]="{ item }">
          {{ genderList[item.sex] || 'não informado' }}  
        </template>
        <template v-slot:[`item.age`]="{ item }">
          {{ item.age || 'não informado' }}  
        </template>
        <template v-slot:no-data>
          <i>Sem dados para mostrar</i>
        </template>
      </v-data-table>
    </v-card>
    <StudentModal @success="getStudents" ref="studentModal" />
  </v-container>
</template>
