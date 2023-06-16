import React, { useState } from "react";
import useApi from "../../hooks/useApi";
import Image from "next/image";
import { Button } from "../../components/Button ";
import BASE_URL from "../../pages/api/apiConfig";
const FlightSearchForm = ({ onResponse }) => {
  const [flyingFrom, setFlyingFrom] = useState("");
  const [flyingTo, setFlyingTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengerCount, setPassengerCount] = useState("2 Adults, 3 Children");

  const { isLoading, error, makeRequest } = useApi();

  const handleReverse = () => {
    setFlyingFrom(flyingTo);
    setFlyingTo(flyingFrom);
  };

  const handleSearch = async () => {
    try {
      // const url = "http://3.133.177.189:81/api/flights";
      const url = `${BASE_URL}/api/flights`;
      const method = "POST";

      const [adults, children] = passengerCount
        .split(",")
        .map((str) => parseInt(str.trim()));

      const data = {
        type: "Return",
        class: "Economy",
        adults,
        childs: children,
        infants: 1,
        tours: [
          {
            departureDate,
            returnDate,
            airportOriginCode: flyingFrom,
            airportDestinationCode: flyingTo,
          },
        ],
      };

      const responseData = await makeRequest(url, method, data);
      onResponse(responseData);
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  return (
    <div className="--flex-around --box-search-flight">
      <div className="--align-center arrow-reverse">
        <div className="input-container">
          <label htmlFor="flyingFrom">Flying From:</label>
          <div className="--align-center">
            <div className="icon">
              <Image
                src="/assets/img/fa-departure.svg"
                alt="Flying from"
                width={24}
                height={24}
              />
            </div>
            <input
              type="text"
              id="airportOriginCode"
              placeholder="Lahore (LHR)"
              name="airportOriginCode"
              value={flyingFrom}
              onChange={(e) => setFlyingFrom(e.target.value)}
            />
          </div>
        </div>
        <div className="reverse-button">
          <button onClick={handleReverse}>
            <Image
              src="/assets/img/arrow.svg"
              alt="Reverse"
              width={24}
              height={24}
            />
          </button>
        </div>
        <div className="input-container">
          <label htmlFor="flyingTo">Flying To:</label>
          <div className="--align-center">
            <div className="icon">
              <Image
                src="/assets/img/fa-retuern.svg"
                alt="Flying to"
                width={24}
                height={24}
              />
            </div>
            <input
              type="text"
              id="airportDestinationCode"
              placeholder="Dubai (DXB)"
              name="airportDestinationCode"
              value={flyingTo}
              onChange={(e) => setFlyingTo(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="input-container">
        <label htmlFor="departureDate">Departure:</label>
        <div className="--align-center">
          <div className="icon">
            <Image
              src="/assets/img/Frame.svg"
              alt="Flying from"
              width={24}
              height={24}
            />
          </div>
          <input
            type="text"
            id="departureDate"
            placeholder="2023-06-16"
            name="departureDate"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>
      </div>

      <div className="input-container">
        <label htmlFor="returnDate">Return:</label>
        <div className="--align-center">
          <div className="icon">
            <Image
              src="/assets/img/Frame.svg"
              alt="Flying from"
              width={24}
              height={24}
            />
          </div>
          <input
            type="text"
            id="returnDate"
            placeholder="2023-06-16"
            name="returnDate"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
      </div>

      <div className="input-container">
        <label htmlFor="passengerCount">Passengers:</label>
        <div className="--align-center">
          <div className="icon">
            <Image
              src="/assets/img/heroicons_users.svg"
              alt="passengerCount"
              width={24}
              height={24}
            />
          </div>
          <input
            type="text"
            id="passengerCount"
            placeholder="2 Adults, 3 Children"
            name="returnDate"
            value={passengerCount}
            onChange={(e) => setPassengerCount(e.target.value)}
          />
        </div>
      </div>

      <div>
        <Button
          text={isLoading ? "Searching..." : "Search"}
          onClick={handleSearch}
          disabled={isLoading}
        />
        {error && <div>Error: {error}</div>}
      </div>
    </div>
  );
};

export default FlightSearchForm;
