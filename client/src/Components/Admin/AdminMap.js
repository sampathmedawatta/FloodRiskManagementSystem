// MapComponent.js

import React, { useState, useEffect } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import Overlay from "ol/Overlay";
import { Style, Icon, Circle, Fill } from "ol/style";
import LocationService from "../../services/location.service";

const MapComponent = ({ locations }) => {
  useEffect(() => {
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([114.17882, 22.32139]), // Hong Kong coordinates
        zoom: 11.1, // Adjust the zoom level as needed
      }),
    });

    // Add markers for each location
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    map.addLayer(vectorLayer);

    // Create an overlay to display popup
    const popupElement = document.createElement("div");
    popupElement.className = "mapPopup";
    const popup = new Overlay({
      element: popupElement,
      positioning: "bottom-center",
      stopEvent: false,
    });
    map.addOverlay(popup);

    // Display popup on marker click
    map.on("click", function (evt) {
      const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
        return feature;
      });

      if (feature) {
        const location = feature.get("location");
        const coordinates = feature.getGeometry().getCoordinates();
        popup.setPosition(coordinates);
        popupElement.innerHTML = `<div class="mapPopupContent">
        <strong> <i class="bi bi bi-geo-alt-fill"></i> ${location.name}</strong><br> 
        <span>${location.type} - ${location.value}</span><br> 
        <span>${location.address}</span><br> 
        <span>${location.contact}</span><br> 
        </div>`;
      } else {
        popup.setPosition(undefined);
      }
    });

    locations.forEach((location) => {
      const marker = new Feature({
        geometry: new Point(
          fromLonLat([location.location[1], location.location[0]])
        ),
        location: location, // Attach location data to the feature
      });
     
      var icn = new Icon({
        src:
          "data:image/svg+xml," +
          encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 48"><path fill="#de2e2e" d="M16 0c-8.837 0-16 7.163-16 16 0 17.063 16 32 16 32s16-14.937 16-32c0-8.837-7.163-16-16-16zm0 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>'
          ),
        anchor: [0.5, 1],
      });

      if (location.type == "Hospital") {
        icn = new Icon({
          src:
            "data:image/svg+xml," +
            encodeURIComponent(
              '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="25" height="25" viewBox="0 0 256 256" xml:space="preserve"><defs></defs><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" ><path d="M 45 0 C 27.868 0 13.93 13.938 13.93 31.07 c 0 4.766 1.054 9.343 3.136 13.613 c 2.96 5.943 12.077 21.355 20.894 36.26 l 4.495 7.604 C 42.983 89.442 43.958 90 45 90 c 1.04 0 2.016 -0.557 2.545 -1.453 l 4.57 -7.729 C 60.859 66.033 69.9 50.745 72.889 44.775 l 0.06 -0.116 c 2.071 -4.252 3.121 -8.825 3.121 -13.589 C 76.069 13.938 62.132 0 45 0 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(209,36,36); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />	<path d="M 45 52.821 c -11.836 0 -21.465 -9.629 -21.465 -21.465 S 33.164 9.892 45 9.892 s 21.465 9.629 21.465 21.465 S 56.836 52.821 45 52.821 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />	<path d="M 49.69 43.726 h -9.381 c -0.552 0 -1 -0.448 -1 -1 v -5.679 H 33.63 c -0.552 0 -1 -0.448 -1 -1 v -9.382 c 0 -0.552 0.448 -1 1 -1 h 5.679 v -5.678 c 0 -0.552 0.448 -1 1 -1 h 9.381 c 0.553 0 1 0.448 1 1 v 5.678 h 5.679 c 0.553 0 1 0.448 1 1 v 9.382 c 0 0.552 -0.447 1 -1 1 H 50.69 v 5.679 C 50.69 43.278 50.243 43.726 49.69 43.726 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(209,36,36); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g></svg>'
            ),
          anchor: [0.5, 1],
        });
      } else if (location.type == "Police Station") {
        icn = new Icon({
          anchor: [0.5, 46],
          anchorXUnits: "fraction",
          anchorYUnits: "pixels",
          src: "imgs/map_police_icon.png",
          height: 25,
        });
      } else if (location.type == "Pump Station") {
        icn = new Icon({
          src:
            "data:image/svg+xml," +
            encodeURIComponent(
              '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 48"><path fill="#111a4d" d="M16 0c-8.837 0-16 7.163-16 16 0 17.063 16 32 16 32s16-14.937 16-32c0-8.837-7.163-16-16-16zm0 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>'
            ),
          anchor: [0.5, 1],
        });
      } else if (location.type == "Flood Shelter") {
        icn = new Icon({
          src:
            "data:image/svg+xml," +
            encodeURIComponent(
              '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 48"><path fill="#ffc107" d="M16 0c-8.837 0-16 7.163-16 16 0 17.063 16 32 16 32s16-14.937 16-32c0-8.837-7.163-16-16-16zm0 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>'
            ),
          anchor: [0.5, 1],
        });
      } else if (location.type == "Fire Station") {
        icn = new Icon({
          src:
            "data:image/svg+xml," +
            encodeURIComponent(
              '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 48"><path fill="#f2940c" d="M16 0c-8.837 0-16 7.163-16 16 0 17.063 16 32 16 32s16-14.937 16-32c0-8.837-7.163-16-16-16zm0 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>'
            ),
          anchor: [0.5, 1],
        });
      } else if (location.type == "Evacuation Point") {
        icn = new Icon({
          src:
            "data:image/svg+xml," +
            encodeURIComponent(
              '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 48"><path fill="#fff3cd" d="M16 0c-8.837 0-16 7.163-16 16 0 17.063 16 32 16 32s16-14.937 16-32c0-8.837-7.163-16-16-16zm0 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>'
            ),
          anchor: [0.5, 1],
        });
      } else if (location.type == "Other") {
        icn = new Icon({
          src:
            "data:image/svg+xml," +
            encodeURIComponent(
              '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 48"><path fill="#f8d7da" d="M16 0c-8.837 0-16 7.163-16 16 0 17.063 16 32 16 32s16-14.937 16-32c0-8.837-7.163-16-16-16zm0 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>'
            ),
          anchor: [0.5, 1],
        });
      }

      marker.setStyle(
        new Style({
          image: icn,
        })
      );

      vectorSource.addFeature(marker);
    });

    return () => {
      map.setTarget(null);
    };
  }, [locations]);

  return <div id="map" className="" style={{ width: "100%", height: "340px" }} />;
};

const AdminMap = () => {
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await LocationService.getLocations();
        if (response) {
          setLocations(response);
        }
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div>   
         <div className="section-box">
    <div className="container">
      <div className="">            
      <div className="row">
      

      
      {locations !== null && <MapComponent locations={locations} />}</div></div></div> </div></div> 
  );
};

export default AdminMap;
