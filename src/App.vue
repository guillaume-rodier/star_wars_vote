<template>
  <v-app :class="['app-style']">
    <TopNavbar />
    <v-main :class="['main-style']">
      <v-progress-circular
        v-if="!showApp"
        color="primary"
        indeterminate
        :class="['loader-style']"
        :size="70"
        :width="7"
      />
      <router-view v-else />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import TopNavbar from "@/components/layout/top-navbar.vue";

export default {
  name: "App",
  components: {
    TopNavbar,
  },
  data() {
    return {
      showApp: true,
    };
  },
  methods: {
    ...mapActions({
      initPeopleList: "starWars/initStarWarsPeople",
    }),
  },
  async created() {
    this.showApp = false;
    await this.initPeopleList();
    this.showApp = true;
  },
};
</script>

<style lang="scss" scoped>
.app-style {
  background-color: #fafafa !important;
  position: relative;

  .main-style {
    position: relative;

    .loader-style {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
