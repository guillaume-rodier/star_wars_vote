<template>
  <v-card
    :class="['mx-auto', 'personage-card']"
    max-width="344"
    elevation="1"
    outlined
    rounded
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div :class="['text-overline', 'mb-4']">{{ personage.homeworld }}</div>
        <v-list-item-title :class="['text-h5', 'mb-1']">
          {{ personage.name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ personage.pic }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey">
        <img :src="personage.pic" alt="John" contain />
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions :class="['px-4', 'pb-4']">
      <v-spacer />
      <v-btn elevation="2" @click="voteFunction"> Vote for me ! </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    personage: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  methods: {
    voteFunction() {
      this.$emit("vote-action", this.personage.id);
    },
  },
};
</script>

<style scoped>
.personage-card {
  border-radius: 8px !important;
}
</style>
