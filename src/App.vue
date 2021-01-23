<template>
  <v-app>
    <v-app-bar app class="primary"> </v-app-bar>

    <v-main>
      <v-container fluid class="">
        <v-col id="app" class="">
          <div id="nav" class="d-flex justify-center">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div>
          <router-view class="d-flex justify-center" />
        </v-col>
      </v-container>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>
