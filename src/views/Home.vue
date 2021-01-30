<template>
  <div class="d-flex flex-column">
    <v-btn shaped @click="goLocationPicker()">Location Picker </v-btn>
    <br />
    <div class="d-flex justify-center">
      <GridList v-bind:coordinatesList="Markers" />
    </div>
  </div>
</template>

<script>
import GridList from "@/components/GridList.vue";
export default {
  components: {
    GridList
  },
  data() {
    return {
      Markers: this.$store.state.Markers
    };
  },
  methods: {
    goLocationPicker() {
      this.$router.push("/locationPicker");
    }
  }
};
</script>

<style></style>
