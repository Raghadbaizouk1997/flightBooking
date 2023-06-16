import React from "react";
import Image from "next/image";
import { Button } from "../../components/Button ";

export const CartFlight = ({responseData, key, count, flyingFrom, flyingTo}) => {
  console.log(responseData , 'responseData');
  return <div>
    <div>
        <h1>{count} Flights</h1>
        </div>
    <div class="card-parent">
        </div>
  </div>;
};
