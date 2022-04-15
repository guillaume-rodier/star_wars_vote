<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="(personage, index) in peopleListArray.characters"
        :key="index"
      >
        <PeopleCardComponent
          :personage="personage"
          @vote-action="voteFunction"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import PeopleCardComponent from "@/components/PeopleCardComponent.vue";

export default {
  name: "HelloHome",
  components: {
    PeopleCardComponent,
  },
  computed: {
    ...mapGetters({
      peopleListArray: "starWars/getPeopleList",
    }),
  },
  methods: {
    voteFunction(personageId) {
      console.log("personageId:", personageId);
    },
  },
  created() {
    console.log("peopleList:", this.peopleListArray);
  },
};
</script>
