<template>
  <v-container fluid v-if="famousPeopleList.length == 0">
    <v-row>
      <v-col cols="12">
        <h1 :class="['text-center']">No one is here!</h1>
      </v-col>
    </v-row>
  </v-container>
  <v-container fluid v-else>
    <v-row>
      <v-col cols="12">
        <h1 :class="['text-center']">Most famous candidates!</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="(personage, index) in famousPeopleList"
        :key="index"
      >
        <PeopleCardComponent :personage="personage" />
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
      famousPeopleList: "starWars/getFamousPeopleList",
    }),
  },
};
</script>
