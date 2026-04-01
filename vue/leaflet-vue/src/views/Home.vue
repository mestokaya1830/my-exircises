<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import L from 'leaflet'
export default {
  name: 'Home',
  data() {
    return {
      title: 'Home Page',
    }
  },
  mounted() {
    this.getMap()
  },
  methods: {
    getMap() {
      let map = L.map('map').setView([51.505, -0.09], 13);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      let circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
      }).addTo(map);

    }
  }
};
</script>