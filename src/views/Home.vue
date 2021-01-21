<template>
  <div class="home" id="imap">
    <mapir :center="center" :apiKey="apiKey"></mapir>
    <span>{{apiKey}}</span>
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
        apiKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY0Y2IyNTQ3YzlmODZhYjU4MTM0MTAzYTAyZjMzNzJiNGVmMzg5MmY5ZmQ0ZmQ4ZTI5MDkxN2ViMmU3YWYwYmJhY2NiZjcxYTMwODIyZjY5In0.eyJhdWQiOiIxMjQyOSIsImp0aSI6ImY0Y2IyNTQ3YzlmODZhYjU4MTM0MTAzYTAyZjMzNzJiNGVmMzg5MmY5ZmQ0ZmQ4ZTI5MDkxN2ViMmU3YWYwYmJhY2NiZjcxYTMwODIyZjY5IiwiaWF0IjoxNjExMjA1OTQxLCJuYmYiOjE2MTEyMDU5NDEsImV4cCI6MTYxMzcxMTU0MSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.mPr3eehV7SAQ1ZeFx-wSWwV9xM_gNgs_OV0ODXNy8ddcFxgMm-gsxhOTxbz3vdi093Mc54Pq644prg1nrE_dhfqPjkTyr3-izGvc0LDZZehcgAIb4BvQ6lFWJgfLGs5qofQDiJAvEowm1mD9U54J2yEh9K5s7O4cc3vVbChFXdeekcyCNA_-3v3T0_zOmvJbNnIMkOotPRIUIVtxmf3BzLvrtC467lv5tFd-AGiSjAHl1HWPzLQSnWcCcuMlURSkExOlyvFlKWoNtVXu6t66zYmbe_g_Z2OaBkEj8Aal309QBUedzG32nE8kj2-RDquV8QODMYejpMXtC9wgpq2Jbw',
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
