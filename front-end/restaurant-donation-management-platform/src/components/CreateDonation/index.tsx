import React from "react";
import { CreateRestaurant } from "./steps/create-restaurant";

interface CreateDonationProps {
  closeCreateDonationModal: () => void;
}

export const CreateDonation = ({
  closeCreateDonationModal,
}: CreateDonationProps) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-2xl w-11/12 md:w-1/3 p-8 relative flex">
        <button
          className="absolute right-4 top-2 cursor-pointer"
          onClick={closeCreateDonationModal}
        >
          X
        </button>
        <CreateRestaurant />
      </div>
    </div>
  );
};
