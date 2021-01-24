<template>
  <v-container class="white">
    <v-col align-self="center">
      <div class="d-flex px-15 justify-center">
        <v-spacer />
        <v-sheet
          class="ma-3 d-flex flex-column align-center "
          shaped
          width="450"
          elevation="8"
          height="270"
        >
          <br />
          <h4 class="primary--text mt-3">
            {{ `Location:[ ${pikdLocation[0]},${pikdLocation[1]}]` }}
          </h4>
          <br />
          <v-text-field
            type="text"
            label="Msg"
            append-icon="mdi-map-marker-plus"
            v-model="newMsg"
            outlined
            color
          ></v-text-field>
          <v-btn class="my-2" fab dark color="indigo" @click="addNewLocation">
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
        </v-sheet>
        <v-spacer />
      </div>
      <br />
      <v-row class="d-flex justify-center ">
        <v-col>
          <div class="home" id="imap">
            <mapir
              :center="center"
              :zoom="z"
              :apiKey="apiKey"
              @click="setLocation"
            >
              <mapMarker
                v-for="(m, index) in Markers"
                :key="index"
                :coordinates.sync="m.coordinates"
                color="red"
                @click="showMsg = !showMsg"
                :draggable="true"
              />
            </mapir>
            <!--span>{{ apiKey }}</!--span-->
          </div>
        </v-col>
      </v-row>
      <!--div
        v-for="(marker, index) in Markers"
        class="d-flex flex-column align-center"
        :key="index"
      >
        <v-card
          v-if="marker.colore !== undifind"
          class="my-7 pa-4"
          elevation="7"
          max-width="500"
        >
          <v-card-text>
            <p class="">
              {{ marker.msg }}
            </p>
            <div class="text--primary"></div>
          </v-card-text>
          <h4 class="primary--text mt-3">
            {{ `Location:${marker.coordinates}` }}
          </h4>
          <br />
          <v-card-actions>
            <v-btn fab color="red" @click="deleteLocarion()">
              <v-icon color="white">mdi-delete</v-icon>
            </v-btn>
            <v-btn fab color="primary">
              <v-icon color="white" @click="go(marker.coordinates)"
                >mdi-crosshairs-gps</v-icon
              ></v-btn
            >
          </v-card-actions>
        </v-card>
      </div-->
    </v-col>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapir, mapMarker } from "mapir-vue";

export default {
  name: "Home",
  components: {
    mapir,
    mapMarker,
  },
  created() {},

  data() {
    return {
      c: [48.684844, 31.384496],
      apiKey:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY0Y2IyNTQ3YzlmODZhYjU4MTM0MTAzYTAyZjMzNzJiNGVmMzg5MmY5ZmQ0ZmQ4ZTI5MDkxN2ViMmU3YWYwYmJhY2NiZjcxYTMwODIyZjY5In0.eyJhdWQiOiIxMjQyOSIsImp0aSI6ImY0Y2IyNTQ3YzlmODZhYjU4MTM0MTAzYTAyZjMzNzJiNGVmMzg5MmY5ZmQ0ZmQ4ZTI5MDkxN2ViMmU3YWYwYmJhY2NiZjcxYTMwODIyZjY5IiwiaWF0IjoxNjExMjA1OTQxLCJuYmYiOjE2MTEyMDU5NDEsImV4cCI6MTYxMzcxMTU0MSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.mPr3eehV7SAQ1ZeFx-wSWwV9xM_gNgs_OV0ODXNy8ddcFxgMm-gsxhOTxbz3vdi093Mc54Pq644prg1nrE_dhfqPjkTyr3-izGvc0LDZZehcgAIb4BvQ6lFWJgfLGs5qofQDiJAvEowm1mD9U54J2yEh9K5s7O4cc3vVbChFXdeekcyCNA_-3v3T0_zOmvJbNnIMkOotPRIUIVtxmf3BzLvrtC467lv5tFd-AGiSjAHl1HWPzLQSnWcCcuMlURSkExOlyvFlKWoNtVXu6t66zYmbe_g_Z2OaBkEj8Aal309QBUedzG32nE8kj2-RDquV8QODMYejpMXtC9wgpq2Jbw",
      center: [48.684844, 31.354496],
      z: 6,
      pikdLocation: [51.420296, 35.732379],
      Markers: this.$store.state.Markers,
      showMsg: false,
      newMsg: "",
    };
  },
  methods: {
    setLocation(e) {
      this.pikdLocation = [e.actualEvent.lngLat.lng, e.actualEvent.lngLat.lat];
    },
    addNewLocation() {
      this.$store.state.Markers.push({
        coordinates: this.pikdLocation,
        msg: this.newMsg,
        colore: "blue",
      });
      console.log(this.$store.state.Markers);
    },
    deleteLocarion() {
      delete this.$store.state.Markers[0];
      this.Markers.push(0, 1);
      console.log(this.Markers);
    },
    go(c) {
      this.center = c;
      this.z = 10;
    },
  },
};
</script>

<style>
#imap {
  width: 80vw;
  height: 90vh;
}
</style>
