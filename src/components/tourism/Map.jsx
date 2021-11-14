/* eslint-disable */
import { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import config from '../../config';
import styles from './map.module.scss';

const mapbox = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}';
const mapStyle = 'qiqily/ckvwo0sz52e1514pcvqyw3t08';
const attribution =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

function initializeMap(mapRef) {
  // TODO: change init view to current select city
  mapRef.current = L.map('map').setView([25.083, 121.555], 12);
  L.tileLayer(mapbox, {
    attribution,
    maxZoom: 18,
    id: mapStyle,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: config.MY_TOKEN,
  }).addTo(mapRef.current);
}

export default function Map(props) {
  const mapRef = useRef(null);

  useEffect(() => {
    initializeMap(mapRef);
    // const greenIcon = new L.Icon({
    //   iconUrl:
    //     'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    //   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    //   iconSize: [25, 41],
    //   iconAnchor: [12, 41],
    //   popupAnchor: [1, -34],
    //   shadowSize: [41, 41],
    // });

    // const marker = L.marker([25.03418, 121.564517], { icon: greenIcon }).addTo(mapRef.current);
    // marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current.flyTo(props.position, 14);
  }, [props.position]);

  // useEffect(() => {
  //   console.log(props.siteData);
  // }, [props.siteData]);

  return <div id="map" className={styles.map} ref={mapRef} />;
}
