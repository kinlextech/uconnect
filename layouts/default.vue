<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      permanent
      expand-on-hover
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <v-list-group :value="true" prepend-icon="mdi-account-circle">
          <template v-slot:activator>
            <v-list-item-title>Biller Payment</v-list-item-title>
          </template>

          <v-list-group :value="true" no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Water</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item link>
              <v-list-item-title>Payment</v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title>View</v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main class="ma-3">
      <nuxt />
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      items: [
        {
          icon: "mdi-apps",
          title: "WORK FLOW",
          to: "/",
        },
      ],
      miniVariant: true,
      right: true,
      rightDrawer: true,
      title: "BCNEX",
    };
  },
};
</script>
