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
import { Style, Icon } from "ol/style";

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
        type: "Hospital",
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
        type: "Police",
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
        type: "City",
      },
    },
    {
      lat: {
        value: "22.308046",
      },
      long: {
        value: "113.918480",
      },
      item: {
        name: "International Airport",
        value: "Hong Kong International Airport",
        type: "City",
      },
    },
    {
      lat: {
        value: "22.316668",
      },
      long: {
        value: "114.183334",
      },
      item: {
        name: "Kowloon",
        value: "Kowloon, Hong Kong",
        type: "City",
      },
    },
    {
      lat: {
        value: "22.285978",
      },
      long: {
        value: "114.191490",
      },
      item: {
        name: "Causeway Bay",
        value: "Causeway Bay, Hong Kong",
        type: "EvacuationPoint",
      },
    },
  ],
};
 
function AdminMap() {
  const [locationList, setlocationList] = useState([]);

  useEffect(() => {
    setlocationList(response.locations);

    const initialCenter = fromLonLat([114.123489, 22.370157]); 
    const locations = {};

    locationList.forEach((location) => {
        const lat = parseFloat(location.lat.value);
        const long = parseFloat(location.long.value);
        const item = location.item;

        if (!isNaN(lat) && !isNaN(long)) {
          const coordinates = fromLonLat([long, lat]);

          if (!locations[coordinates]) {
            locations[coordinates] = {
              cluster: new Feature({
                geometry: new Point(coordinates),
                name: item.name,
                description: item.value,
                type: item.type,
              }),
            };
          }
        }
    })

    const vectorSource = new VectorSource();
    
    for (const key in locations) {
        if (locations.hasOwnProperty(key)) {
          const cluster = locations[key].cluster;
 
          console.log(cluster);
          var icon =
            "data:image/svg+xml," +
            encodeURIComponent(
              '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="38" viewBox="0 0 32 48"><path fill="#de2e2e" d="M16 0c-8.837 0-16 7.163-16 16 0 17.063 16 32 16 32s16-14.937 16-32c0-8.837-7.163-16-16-16zm0 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>'
            ); 
 
          if (cluster.values_.type == "City") {
            icon =
              "data:image/svg+xml," +
              encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="38" viewBox="0 0 32 48"><path fill="#de2e2e" d="M16 0c-8.837 0-16 7.163-16 16 0 17.063 16 32 16 32s16-14.937 16-32c0-8.837-7.163-16-16-16zm0 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>'
              );
          }

           if (cluster.values_.type == "EvacuationPoint") {
             icon =
               "data:image/svg+xml," +
               encodeURIComponent(
                 '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="38" viewBox="0 0 32 48"><path fill="#e99011" d="M16 0c-8.837 0-16 7.163-16 16 0 17.063 16 32 16 32s16-14.937 16-32c0-8.837-7.163-16-16-16zm0 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>'
               );
           }
            if (cluster.values_.type == "Hospital") {
              icon =
                "data:image/svg+xml," +
                encodeURIComponent(
                  '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="38" viewBox="0 0 32 48"><path fill="#254902" d="M16 0c-8.837 0-16 7.163-16 16 0 17.063 16 32 16 32s16-14.937 16-32c0-8.837-7.163-16-16-16zm0 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>'
                );
            }
             if (cluster.values_.type == "Police") {
               icon =
                 "data:image/svg+xml," +
                 encodeURIComponent(
                   '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="38" viewBox="0 0 32 48"><path fill="#0d54c3" d="M16 0c-8.837 0-16 7.163-16 16 0 17.063 16 32 16 32s16-14.937 16-32c0-8.837-7.163-16-16-16zm0 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>'
                 );
             }

          cluster.setStyle(
            new Style({
              image: new Icon({
                src: icon,

                anchor: [0.5, 1],
              }),
            })
          );

          // Display sensor info when clicking a cluster
         // cluster.setProperties({ items, itemCount });

          vectorSource.addFeature(cluster);

        }
    }

    // const vectorSource = new VectorSource({
    //   features: [iconFeature],
    // });

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

export default AdminMap;
