import imgDonate from "../../assets/donate-image.png";
import { Outlet, useNavigate } from "react-router";
import { LatestDonations } from "../LatestDonations/LatestDonations";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="flex w-screen h-hero px-4 md:px-0 bg-[#f6f6f6]">
        <div className="w-full h-full flex flex-col md:flex-row  items-center justify-center md:justify-between">
          <div className="flex-2 md:flex-2 text-center order-2 md:order-1">
            <h1 className="mt-4 md:mt-0 text-2xl md:text-3xl uppercase font-bold">
              Cada prato doado é uma vida transformada
            </h1>
            <h2 className="text-xl md:text-2xl mt-4 ">
              Uma chance para todos aqueles que lutam contra a fome
            </h2>
            <h3 className="mt-4">Doe uma marmita. Seja solidário!</h3>
            <button
              onClick={() => navigate("/create-donation")}
              className="bg-[#e94911] text-white px-8 py-4 rounded-full mt-4 cursor-pointer"
            >
              FAÇA UMA DOAÇÃO
            </button>
          </div>
          <div className="flex-1 md:flex-2 order-1 md:order-2">
            <img className="md:w-11/12 w-full" src={imgDonate} />
          </div>
        </div>

        <Outlet />
      </main>
      <div>
        <LatestDonations />
      </div>
    </>
  );
};
