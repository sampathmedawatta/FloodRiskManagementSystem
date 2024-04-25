// MarkerPopupMap.js
import React, { useState, useEffect } from "react";
import Point from "ol/geom/Point.js";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import { OGCMapTile, Vector as VectorSource } from "ol/source.js";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer.js";
import Overlay from "ol/Overlay";
import { toLonLat } from "ol/proj.js";
import { toStringHDMS } from "ol/coordinate.js";
import Feature from "ol/Feature.js";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";


const response = {
  locations: [
    {
      lat: {
        value: "22.39056",
      },
      long: {
        value: "114.27839",
      },
      item: {
        name: "Sai Kung",
        value: "Evacuation point",
      },
    },
    {
      lat: {
        value: "22.37902",
      },
      long: {
        value: "114.06027",
      },
      item: {
        name: "Chung Hong",
        value: "Evacuation point",
      },
    },
    {
      lat: {
        value: "22.29900",
      },
      long: {
        value: "113.90372",
      },
      item: {
        name: "Sha Lo Wan",
        value: "Evacuation point",
      },
    },
  ],
};

const OLMap = () => {

    const [locationList, setlocationList] = useState([]);

  useEffect(() => {
    setlocationList(response.locations);

    const initialCenter = fromLonLat([114.123489, 22.370157]); 

    const iconFeature = new Feature({
      geometry: new Point(initialCenter),
      name: "Null Island",
      population: 4000,
      rainfall: 500,
    });

    const vectorSource = new VectorSource({
      features: [iconFeature],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const rasterLayer = new TileLayer({
      source: new OSM(),
    });

    const container = document.getElementById("popup");
    const content = document.getElementById("popup-content");
    const closer = document.getElementById("popup-closer");
    const overlay = new Overlay({
      element: container,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });

    const map = new Map({
      layers: [rasterLayer, vectorLayer],
      target: "markerpopupmap",
      view: new View({
        center: initialCenter,
        zoom: 10,
      }),
      overlays: [overlay],
    });

    /**
     * Add a click handler to the map to render the popup.
     */
    map.on("select", function (evt) {
      const coordinate = evt.coordinate;
      const hdms = toStringHDMS(toLonLat(coordinate));

      content.innerHTML = "<p>You clicked here:</p><code>" + hdms + "</code>";
      overlay.setPosition(coordinate);
    });
    return () => map.setTarget(null);
  }, []);

  return (
    <div>
      <div id="markerpopupmap" style={{ width: "100%", height: "50vh" }} />
      <div id="popup" class="ol-popup" style={{ backgroundColor: "#fff" }}>
        <a href="#" id="popup-closer" class="ol-popup-closer"></a>
        <div id="popup-content"></div>
      </div>
    </div>
  );
};

export default OLMap;
