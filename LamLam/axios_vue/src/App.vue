<template>
  <v-app>
    <v-main>
      <RouterDemo/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import RouterDemo from "@/components/RouterDemo";

export default {
  name: 'App',

  components: {
    RouterDemo,

  },

  data: () => ({
    //
  }),
}
</script>
