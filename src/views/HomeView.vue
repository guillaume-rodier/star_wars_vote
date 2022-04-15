<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h1 :class="['text-center']">List of candidates!</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="(personage, index) in peopleListArray"
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
import { mapGetters, mapActions } from "vuex";
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
    ...mapActions({
      doVote: "starWars/doVote",
    }),
    voteFunction(personageId) {
      this.doVote(personageId);
    },
  },
};
</script>
