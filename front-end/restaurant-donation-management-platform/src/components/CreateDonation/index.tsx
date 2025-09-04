import React from "react";
import { Outlet, useNavigate } from "react-router";

export const CreateDonation = () => {
  const navigate = useNavigate();

  const closeModal = () => navigate("/");

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-2xl w-11/12 md:w-1/3 p-8 relative flex">
        <button
          className="absolute right-4 top-2 cursor-pointer"
          onClick={closeModal}
        >
          X
        </button>
        <Outlet />
      </div>
    </div>
  );
};
