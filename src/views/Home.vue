<template>
  <div class="home" id="imap">
    <mapir :center="center" :apiKey="apiKey"></mapir>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapir} from 'mapir-vue';

export default {
  name: "Home",
  components: {
    mapir
  },
  data() {
      return {
        apiKey: process.env.API_KEY,
        center: [51.420296, 35.732379]
      };
    }
};
</script>

<style>
  #imap {
    width: 90vw;
    height: 90vh;
  }
</style>
