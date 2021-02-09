import React from "react";
import Search from "./Search";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as pharmData from "./data/pharmacies.json";
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
            <Search setText={handleText} />
            <MapContainer center={[50.447731, 30.542721]} zoom={12}>
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
            </MapContainer>
        </>
    );
}

// const [activePark, setActivePark] = React.useState(null);

// React.useEffect(() => {
//     fetch(
//         "http://95.134.188.86:9008/api/v2.1/pharmacies",
//         {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization:
//                     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMwLCJ1c2VybmFtZSI6ImNvUkV6NGFwSSIsInNjb3BlIjpbImNvcmV6b2lkX3VzZXIiLCJnZW5lcmFsX3VzZXIiLCJib3RfdXNlciIsInN5bmNfYmFsYW5jZV91c2VyIiwic3J2X3VzZXIiLCJjYXJkX3VzZXIiLCJldmVudF91c2VyIiwiZXZlbnQtdXNlciJdLCJlbWFpbCI6IiIsImNvbXBhbnlJZCI6MCwiaW5zdXJhbmNlSWQiOjAsInF0eVR5cGUiOjAsInByaWNlVHlwZSI6MSwiZW1wbG95ZWVJZCI6MCwiaWF0IjoxNjEyNjk1NDgyLCJleHAiOjE2MTI3ODE4ODJ9.lpl6Ua_eWcFEnaO_Wt5EIyzN97Xjr6XajCi7Cs45zr8",
//             },
//             mode: "no-cors",
//             body: JSON.stringify(),
//         }
//     )
//             axios
//                 .get(
//                     "https://cors-anywhere.herokuapp.com/http://95.134.188.86:9008/api/v2/pharmacies/483/balance?offset=0&limit=15000",
//                     {
//                         headers: {
//                             authorization:
//                                 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMyLCJ1c2VybmFtZSI6Im1hcmlhNGFwaSIsInNjb3BlIjpbImNvcmV6b2lkX3VzZXIiLCJnZW5lcmFsX3VzZXIiLCJib3RfdXNlciIsInN5bmNfYmFsYW5jZV91c2VyIiwic3J2X3VzZXIiLCJjYXJkX3VzZXIiLCJldmVudF91c2VyIiwiZXZlbnQtdXNlciJdLCJlbWFpbCI6Im1hbmRyaWttYXJpaWFAZ21haWwuY29tIiwiY29tcGFueUlkIjo2LCJpbnN1cmFuY2VJZCI6MCwicXR5VHlwZSI6MCwicHJpY2VUeXBlIjoxLCJlbXBsb3llZUlkIjowLCJpYXQiOjE2MTI2OTk1MzQsImV4cCI6MTYxMjc4NTkzNH0.xtbAPPmFOXck5GNuRc2b_u8fd2Wq3M0IKHtHei6wwtQ",
//                         },
//                     }
//                 )
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//     console.log(activePark);
// }, []);

{
    /* {activePark && (
                <Popup
                    position={[
                        activePark.geometry.coordinates[1],
                        activePark.geometry.coordinates[0],
                    ]}
                    onClose={() => {
                        console.log("no");
                        setActivePark(null);
                    }}
                >
                    <div>
                        <h2>{activePark.properties.NAME}</h2>
                        <p>{activePark.properties.DESCRIPTIO}</p>
                    </div>
                </Popup>
            )} */
}

// onClick={() => {
//     console.log("yes");
//     setActivePark(park);
// }}

// onClose={() => {
//     console.log("no");
//     setActivePark(null);
// }}
