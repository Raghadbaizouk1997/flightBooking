import React, { useState } from "react";
import FlightSearchForm from "./FlightSearchForm";
import Image from "next/image";
import { CartFlight } from "./CartFlight";
import { CartFlightItem } from "./CartFlightItem";

export const AvailableFlight = () => {
  const [responseData, setResponseData] = useState(null);
  const [flyingFromValue, setFlyingFromValue] = useState("");
  const [flyingToValue, setFlyingToValue] = useState("");

  const handleResponse = (data) => {
    setResponseData(data);
  };

  return (
    <>
      <div className="card-flight-container">
        <div className="avialable-flight-section">
          <div className="available-section">
            <h1 className="text-color-white --font-weight-bold">
              Available Flights
            </h1>
            <span>Home</span>
            <span className="home-divider"> io</span>
            <span>Available Flights</span>
          </div>
        </div>
        <FlightSearchForm
          onResponse={handleResponse}
          flyingFrom={flyingFromValue}
          flyingTo={flyingToValue}
        />
      </div>
      <div style={{ display: "flex", marginTop: "100px" }}>
        <div style={{ flex: "70%", flexBasis: "70%" }}>
          {responseData &&
            responseData.data.flights.map((item, index, count) => (
              <CartFlightItem
                key={index}
                responseData={item}
                count={responseData.data.flights.length}

              />
            ))}
        </div>
        <div style={{ flex: "30%", flexBasis: "30%" }}>Child 2</div>
      </div>
    </>
  );
};
