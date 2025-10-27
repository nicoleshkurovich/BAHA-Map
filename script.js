mapboxgl.accessToken = 'pk.eyJ1Ijoibmljb2xlc2hrdXJvdmljaCIsImEiOiJjbWdwdGpraDIwdHF4MmpvdXF3d2JudnlvIn0.yjwHwmrkdHgt5YPs_Q6wpw';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/nicoleshkurovich/cmh9rb39n00bk01sq5gtx9yfr', // your Style URL goes here
  center: [-122.27, 37.87], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9 // starting zoom
    });