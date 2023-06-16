import React from "react";
import Image from "next/image";
import { Button } from "../../components/Button ";

export const CartFlightItem = ({ responseData }) => {


  return (
    <div class="card-parent">
      <div className="--flex-between --dir-column">
        {responseData &&
          responseData.tours.map((tour, index) => (
            <div key={index}>
              {tour.tourSegments.map((segment, i) => (
                <>
                <h1>{segment.DepartureAirportCode}</h1>
                <h1>{segment.ArrivalAirportCode}</h1>
                </>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};
