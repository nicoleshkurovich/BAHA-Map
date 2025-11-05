mapboxgl.accessToken = 'pk.eyJ1Ijoibmljb2xlc2hrdXJvdmljaCIsImEiOiJjbWdwdGpraDIwdHF4MmpvdXF3d2JudnlvIn0.yjwHwmrkdHgt5YPs_Q6wpw';

// Create the map
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/nicoleshkurovich/cmh9rb39n00bk01sq5gtx9yfr', // your Style URL
  center: [-122.27, 37.87], // starting position [lng, lat]
  zoom: 9 // starting zoom
});

// When the map loads
map.on('load', function () {

  // Add GeoJSON source
  map.addSource('points-data', {
    type: 'geojson',
    data: 'https://raw.githubusercontent.com/nicoleshkurovich/BAHA-Map/main/data/183data.geojson'
  });

  // Add a circle layer to show the points
  map.addLayer({
    id: 'points-layer',
    type: 'circle',
    source: 'points-data',
    paint: {
      'circle-color': '#0c2317',  // fixed (no alpha channel)
      'circle-radius': 6,
      'circle-stroke-width': 2,
      'circle-stroke-color': '#ffffff'
    }
  });

    // Add click event for popups
    map.on('click', 'points-layer', (e) => {
        // Copy coordinates array
        const coordinates = e.features[0].geometry.coordinates.slice();
        const properties = e.features[0].properties;

    const popupContent = `
    <div>
        <h3>${properties.Landmark}</h3>
        <p><strong>Address:</strong> ${properties.address}</p>
        <p><strong>Architect:</strong> ${properties.architect}</p>
        <p><strong>Date:</strong> ${properties.date}</p>
        <p><strong>Designated:</strong> ${properties.designated}</p>
        ${properties.link ? `<p><a href="${properties.link}" target="_blank">More Information</a></p>` : ''}
        ${properties.notes ? `<p><strong>Notes:</strong> ${properties.notes}</p>` : ''}
    </div>
`;

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(popupContent)
            .addTo(map);
    });

    // Change cursor to pointer when hovering over points
    map.on('mouseenter', 'points-layer', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change cursor back when leaving points
    map.on('mouseleave', 'points-layer', () => {
        map.getCanvas().style.cursor = '';
    });

});
