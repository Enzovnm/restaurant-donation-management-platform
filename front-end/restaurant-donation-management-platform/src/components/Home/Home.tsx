import React from "react";
import imgDonate from "../../assets/donate-image.png";

export const Home = () => {
  return (
    <main className="flex w-screen h-screen bg-[#f6f6f6]">
      <div className="w-full h-full flex items-center justify-between">
        <div className="flex-2 text-center">
          <h1 className="text-3xl uppercase font-bold">
            Cada prato doado é uma vida transformada
          </h1>
          <h2 className="text-2xl mt-4">
            Uma chance para todos aqueles que lutam contra a fome
          </h2>
          <h3 className="mt-4">Doe uma marmita. Seja solidário!</h3>
        </div>
        <div className="flex-2">
          <img className="w-11/12" src={imgDonate} />
        </div>
      </div>
    </main>
  );
};
