import React, { useEffect, useState } from "react";
import { DonationCard } from "./DonationCard";
import type { ApiDonationSchema } from "../CreateDonation/donation-schema";

export const LatestDonations = () => {
  const [donations, setDonations] = useState<ApiDonationSchema[]>();

  useEffect(() => {
    const apiUrl = "http://localhost:8080/restaurants";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) throw new Error("Error to search new donations");
        return response.json();
      })
      .then((data: ApiDonationSchema[]) => {
        setDonations(data.slice(-5));
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(donations);

  return (
    <section className="bg-[#f6f6f6] md:p-8">
      <h1 className="text-xl md:text-2xl uppercase font-bold text-center">
        Últimas doações
      </h1>
      <div className="flex mt-4 md:mt-8 py-2 justify-center md:justify-between">
        {donations?.map((donation, index) => (
          <div key={index} className="md:w-2xs md:h-96 ">
            <DonationCard
              restaurantName={donation.name}
              mealName={donation.meals.map((meal) => meal.name).join(",")}
              picture={donation.picture}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
