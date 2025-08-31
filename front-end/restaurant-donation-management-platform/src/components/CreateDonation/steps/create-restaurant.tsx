import React from "react";

export const CreateRestaurant = () => {
  return (
    <div className="w-full">
      <div>
        <h1 className="text-xl text-center">Crie seu restaurante!</h1>
      </div>
      <form className="mt-8 ">
        <div>
          <label>Nome do restaurante*</label>
          <input
            type="text"
            className="w-full mt-1 p-3.5 border rounded-md"
            placeholder="Digite o nome"
          />
        </div>

        <div className="mt-3">
          <label>E-mail*</label>
          <input
            type="email"
            className="w-full mt-0.5 p-3.5 border rounded-md"
            placeholder="Digite o e-mail"
          />
        </div>

        <div className="mt-3">
          <label>CNPJ*</label>
          <input
            type="email"
            className="w-full mt-0.5 p-3.5 border rounded-md"
            placeholder="Digite o CNPJ"
          />
        </div>

        <div className="mt-3">
          <label>URL da imagem</label>
          <input
            type="url"
            className="w-full mt-0.5 p-3.5 border rounded-md"
            placeholder="Digite a URL"
          />
        </div>

        <button className="bg-[#e94911] w-full text-white  px-8 py-4 rounded-full mt-8 cursor-pointer">
          AVANÇAR
        </button>
      </form>
    </div>
  );
};
