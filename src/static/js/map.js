let map = L.map("map").setView([38.75, -94.57], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 8,
  minZoom: 5,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Heatmap layer (initialized with dummy points)
// let heatLayer = L.heatLayer([], {
//   radius: 25,
//   blur: 15,
//   maxZoom: 10,
// }).addTo(map);

// Expose map & heatLayer
// window.map = map;
// window.heatLayer = heatLayer;
