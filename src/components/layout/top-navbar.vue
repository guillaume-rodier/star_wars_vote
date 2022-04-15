<template>
  <v-app-bar app color="primary" dark>
    <div :class="['d-flex', 'align-center']">
      <v-img
        alt="Vuetify Logo"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
        :class="['shrink', 'mr-2']"
      />

      <v-img
        alt="Vuetify Name"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
        :class="['shrink', 'mt-1', 'hidden-sm-and-down']"
      />
    </div>

    <v-spacer />

    <v-btn target="_blank" text @click="redirection('home')">
      <span :class="['mr-2']" :style="sizeText">List of candidates</span>
    </v-btn>
    <v-btn target="_blank" text @click="redirection('vote')">
      <span :class="['mr-2']" :style="sizeText">Famous candidates</span>
    </v-btn>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  name: "TopNavbar",
  computed: {
    sizeText() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return { fontSize: "10px" };
      } else {
        return { fontSize: "14px" };
      }
    },
  },
  methods: {
    redirection(routeName) {
      this.$router.push({ name: routeName });
    },
  },
};
</script>

<style lang="scss" scoped></style>
