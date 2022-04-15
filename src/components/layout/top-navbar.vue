<template>
  <v-app-bar app color="grey" dark>
    <div :class="['d-flex', 'align-center']">
      <v-img
        alt="Vuetify Logo"
        contain
        src="https://icons.iconarchive.com/icons/sensibleworld/starwars/1024/Death-Star-icon.png"
        transition="scale-transition"
        width="40"
        :class="['shrink', 'mr-2']"
      />
    </div>

    <v-spacer />

    <div v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-for="(item, index) in listItems"
        :key="index"
        target="_blank"
        text
        @click="redirection(item.routeName)"
      >
        <span :class="['mr-2']" :style="sizeText">{{ item.text }}</span>
      </v-btn>
    </div>

    <v-spacer />

    <v-menu
      v-if="$vuetify.breakpoint.smAndDown"
      top
      :close-on-click="closeOnClick"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="black" dark v-bind="attrs" v-on="on"> Menu </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in listItems"
          :key="index"
          @click="redirection(item.routeName)"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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
      this.$router.push({ name: routeName }).catch(() => {});
    },
  },
  data() {
    return {
      closeOnClick: true,
      listItems: [
        { text: "List of candidates", routeName: "home" },
        { text: "Famous candidates", routeName: "vote" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
