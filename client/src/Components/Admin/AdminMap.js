// MapComponent.js

import React, { useEffect } from "react";
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
import { Style, Circle, Fill } from "ol/style";

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
        center: fromLonLat([114.06027, 22.37902]), // Hong Kong coordinates
        zoom: 10, // Adjust the zoom level as needed
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
          fromLonLat([location.longitude, location.latitude])
        ),
        location: location, // Attach location data to the feature
      });
      marker.setStyle(
        new Style({
          image: new Circle({
            radius: 6,
            fill: new Fill({ color: "red" }),
          }),
        })
      );
      vectorSource.addFeature(marker);
    });

    return () => {
      map.setTarget(null);
    };
  }, [locations]);

  return <div id="map" style={{ width: "100%", height: "400px" }} />;
};

const AdminMap = () => {
  const response = {
    locations: [
      {
        latitude: 22.39056,
        longitude: 114.27839,
        name: "Sai Kung",
        value: "Evacuation point",
        type: "School",
        address: "40 Stubbs Rd, Happy Valley, Hong Kong",
        contact: "+852 3651 8888",
      },
      {
        latitude: 22.37902,
        longitude: 114.06027,
        name: "Chung Hong",
        value: "Evacuation point",
        type: "Police",
        address: "40 Stubbs Rd, Happy Valley, Hong Kong",
        contact: "+852 3651 8888",
      },
      {
        latitude: 22.299,
        longitude: 113.90372,
        name: "Sha Lo Wan",
        value: "Evacuation point",
        type: "Hospital",
        address: "40 Stubbs Rd, Happy Valley, Hong Kong",
        contact: "+852 3651 8888",
      },
    ],
  };

  return (
    <div>
      <MapComponent locations={response.locations} />
    </div>
  );
};

export default AdminMap;
