import imgLogo from "../../assets/logo_marmitadobem_icon.png";
import type { DonationSchema } from "../CreateDonation/donation-schema";

export const DonationCard = ({
  restaurantName,
  mealName,
  picture,
}: Partial<DonationSchema>) => {
  return (
    <div className="flex flex-col h-full w-full items-center p-8 shadow-lg/30 bg-white rounded-2xl ">
      <h2 className="text-center font-bold">{restaurantName}</h2>
      <div className="h-3/4 mt-2">
        <img src={picture || imgLogo} className="w-fit h-full" />
      </div>
      <div className="text-center">
        <p>Realizou uma doação:</p>
        <p>{mealName}</p>
      </div>
    </div>
  );
};
