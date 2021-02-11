import React from "react";
// import Search from "./Search";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as pharmData from "./data/pharmacies.json";
import Search from "react-leaflet-search";
import "./App.css";

export const nine = new Icon({
    iconUrl: "911.png",
    iconSize: [50, 50],
});

export const oc = new Icon({
    iconUrl: "OC.png",
    iconSize: [50, 50],
});

export const nc = new Icon({
    iconUrl: "NC.png",
    iconSize: [50, 50],
});

export default function App() {
    const [text, setText] = React.useState();

    const handleText = (e) => {
        const { value } = e.target;
        setText(value);
    };

    const filteredPharm =
        text === undefined
            ? pharmData.data
            : pharmData.data.filter(
                  (pharm) =>
                      pharm.name.toLowerCase().includes(text.toLowerCase()) ||
                      pharm.address
                          .toLowerCase()
                          .includes(text.toLowerCase()) ||
                      pharm.description
                          .toLowerCase()
                          .includes(text.toLowerCase()) ||
                      pharm.brandnameUA
                          .toLowerCase()
                          .includes(text.toLowerCase()) ||
                      pharm.brandnameRU
                          .toLowerCase()
                          .includes(text.toLowerCase()) ||
                      pharm.orgName.toLowerCase().includes(text.toLowerCase())
              );

    return (
        <>
            {/* <Search setText={handleText} /> */}
            <Map center={[50.447731, 30.542721]} zoom={12}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {filteredPharm.map((pharm) => (
                    <Marker
                        key={pharm.id}
                        position={[pharm.latitude, pharm.longitude]}
                        icon={
                            pharm.description === "Аптечная сеть 911"
                                ? nine
                                : pharm.description === "Аптека оптовых цен"
                                ? oc
                                : nc
                        }
                    >
                        <Popup position={[pharm.latitude, pharm.longitude]}>
                            <div>
                                <h2>{pharm.name}</h2>
                                <h2>{pharm.description}</h2>
                                <p>{pharm.address}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
                <Search
                    inputPlaceholder="Введите адресс"
                    position="topleft"
                    provider="OpenStreetMap"
                    providerOptions={{ region: "ua" }}
                    zoom={15}
                    showPopup={false}
                />
            </Map>
        </>
    );
}
