import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as pharmData from "./data/pharmacies.json";
import "./App.css";

export const icon = new Icon({
    iconUrl: "/skateboarding.svg",
    iconSize: [25, 25],
});

export default function App() {
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

    return (
        <MapContainer center={[50.447731, 30.542721]} zoom={12}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            {pharmData.data.map((pharm) => (
                <Marker
                    key={pharm.id}
                    position={[
                        pharm.latitude,
                        pharm.longitude,
                    ]}
                    // onClick={() => {
                    //     console.log("yes");
                    //     setActivePark(park);
                    // }}
                    // icon={icon}
                >
                    <Popup
                        position={[
                            pharm.latitude,
                            pharm.longitude,
                        ]}
                        // onClose={() => {
                        //     console.log("no");
                        //     setActivePark(null);
                        // }}
                    >
                        <div>
                            <h2>{pharm.name}</h2>
                            <p>{pharm.address}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}

            {/* {activePark && (
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
            )} */}
        </MapContainer>
    );
}
