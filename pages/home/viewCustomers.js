import React from "react";
import { staticData } from "../../public/data";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export const ViewCustomers = () => {
  return (
    <div className="--flex-dir-column gap-15">
      <div style={{ flexBasis: "70%" }} className="--group-customers">
        <div className="--group-customers-img --align-center --dir-column gap-15">
          <Image
            src="/assets/img/Map-marker.svg"
            alt="Slider Image"
            width={20}
            height={20}
          />
          <Image
            src="/assets/img/customer.svg"
            alt="image27"
            width={50}
            height={50}
          />

          <h6>Dubai, UAE</h6>
        </div>
      </div>
      <div style={{ flexBasis: "30%" }}>
        <h1 className="text-color-darker --font-weight-bold --title-line-height">
          Oue Customers Say About Us
        </h1>
        <Image
          src="/assets/img/arrowCustomer.svg"
          alt="image27"
          width={30}
          height={30}
        />
        <p className="text-color-dark  --margin-top">
          {" "}
          Lörem ipsum krorat ekosiv och sende anime då cringe. Detisk. Egonat.
          Diren den eftersom sojaren, men poligam.
        </p>
        {staticData.ViewCustomers.map((item) => (
          <div>
            <div className="--align-center gap-15 --margin-top">
              <Image
                src="/assets/img/customer.svg"
                alt="image27"
                width={30}
                height={30}
              />
              <h3>{item.name}</h3>
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  backgroundColor: "var(--light-blue)",
                }}
              ></span>
              <h3 className="text-color-dark">{item.type}</h3>
            </div>
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                className="star"
                style={{
                  color: index < item.rating ? "gold" : "#ddd",
                  marginTop: "10px",
                }}
                onClick={() => {}}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
