import imgDonate from "../../assets/donate-image.png";

export const Home = () => {
  return (
    <main className="flex w-screen h-hero bg-[#f6f6f6]">
      <div className="w-full h-full flex items-center justify-between">
        <div className="flex-2 text-center">
          <h1 className="text-3xl uppercase font-bold">
            Cada prato doado é uma vida transformada
          </h1>
          <h2 className="text-2xl mt-4">
            Uma chance para todos aqueles que lutam contra a fome
          </h2>
          <h3 className="mt-4">Doe uma marmita. Seja solidário!</h3>
          <button className="bg-[#e94911] text-white  px-8 py-4 rounded-full mt-4 cursor-pointer">
            FAÇA UMA DOAÇÃO
          </button>
        </div>
        <div className="flex-2">
          <img className="w-11/12" src={imgDonate} />
        </div>
      </div>
    </main>
  );
};
