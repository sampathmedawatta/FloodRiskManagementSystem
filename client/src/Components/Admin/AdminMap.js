import React, { useState, useEffect, useContext } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import Popup from "ol-ext/overlay/Popup";
import Select from "ol/interaction/Select";
import { click } from "ol/events/condition";
import { Style, Icon } from "ol/style";
import { Context } from "../../context/context";
import { useNavigate } from "react-router-dom";

const response = {
  locations: [
    {
      lat: {
        value: "-36.821658",
      },
      long: {
        value: "145.03904",
      },
      item: {
        name: "Hospital",
        value: "Evacuation point",
      },
    },
    {
      lat: {
        value: "-37.821658",
      },
      long: {
        value: "145.03904",
      },
      item: {
        name: "Hospital",
        value: "Evacuation point",
      },
    },
    {
      lat: {
        value: "-37.821658",
      },
      long: {
        value: "145.03904",
      },
      item: {
        name: "Hospital",
        value: "Evacuation point",
      },
    },
  ],
};

function AdminMap() {

    const [locationList, setlocationList] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {

    setlocationList(response.locations);
    const initialCenter = fromLonLat([145.03818, -37.82635]); // Specify the initial center (longitude, latitude)
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: initialCenter,
        zoom: 0,
      }),
    });

    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    map.addLayer(vectorLayer);

    const locations = {};

    locationList.forEach((location) => {
      const lat = parseFloat(location.lat.value);
      const long = parseFloat(location.long.value);
      const item = location.item;
      const itemName = location.item.name;
      const itemValue = location.item.value;

      console.log("name " + item.name);
      console.log("value " + item.value);

      if (!isNaN(lat) && !isNaN(long)) {
        const coordinates = fromLonLat([long, lat]);

        if (!locations[coordinates]) {
          locations[coordinates] = {
            cluster: new Feature({
              geometry: new Point(coordinates),
              items: [],
            }),
          };
        }

        locations[coordinates].cluster.get("items").push({
          item,
        });
      }
    });


  }, []);

  return (
    <div className="col-xxl-5 col-xl-6 col-lg-6">
      <div className="section-box">
        <div className="container">
          <div className="panel-white">
            <div className="panel-head">
              <div className="row">
                <div className="col-md-10">
                  <h6 className="text-left">
                    <i className="bi bi-globe-central-south-asia fs-5" />
                    &nbsp;&nbsp;
                  </h6>
                </div>
                <div className="col-md-2">
                  <p className="text-right font-xs color-text-paragraph-2">
                    {}
                  </p>
                </div>
              </div>
            </div>
            <div className="panel-body">
              <div className="col-12 mapcont">
                <div
                  id="map"
                  style={{
                    width: "100%",
                    height: "70vh",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminMap;
