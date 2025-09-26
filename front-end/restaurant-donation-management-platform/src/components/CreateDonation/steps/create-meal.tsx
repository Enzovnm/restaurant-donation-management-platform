import React, { useState } from "react";
import z from "zod";
import { donationSchema } from "../donation-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDonationStore } from "../../../stores/DonationStore";

const createMealSchema = donationSchema.pick({
  mealName: true,
  mealDescription: true,
});

type CreateMealSchema = z.infer<typeof createMealSchema>;

export const CreateMeal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<CreateMealSchema>({
    resolver: zodResolver(createMealSchema),
    defaultValues: useDonationStore.getState(),
  });

  const restaurantName = useDonationStore((state) => state.restaurantName);
  const email = useDonationStore((state) => state.email);
  const cnpj = useDonationStore((state) => state.cnpj);
  const picture = useDonationStore((state) => state.picture);

  const setData = useDonationStore((state) => state.setData);

  const [apiError, setApiError] = useState<{ message?: string }>({});

  const navigate = useNavigate();

  const handleForm = async (data: CreateMealSchema) => {
    const createRestaurantUrl = "http://localhost:8080/restaurants";
    const createMealUrl = "http://localhost:8080/meals";

    try {
      const restaurantResponse = await fetch(createRestaurantUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: restaurantName,
          email,
          cnpj,
          picture,
        }),
      });

      const restaurantData = await restaurantResponse.json();

      if (!restaurantResponse.ok) {
        setApiError(restaurantData);
        return;
      }

      const mealResponse = await fetch(createMealUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurant_id: restaurantData.id,
          name: data.mealName,
          description: data.mealDescription,
        }),
      });

      const mealData = await mealResponse.json();

      if (!mealResponse.ok) {
        setApiError(mealData);
        return;
      }

      navigate("/");
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const handleBack = (data: CreateMealSchema) => {
    setData({ ...data, restaurantName, email, cnpj, picture });
    navigate("/create-donation");
  };

  return (
    <div className="w-full">
      <div>
        <h1 className="text-xl text-center">Descreva a marmita de doação!</h1>
      </div>
      {apiError.message && (
        <p className="mt-4 text-red-500">{apiError.message}</p>
      )}
      <form className="mt-8" onSubmit={handleSubmit(handleForm)}>
        <div>
          <label className={`${errors.mealName ? "text-red-500" : ""}`}>
            Nome da marmita*
          </label>
          <input
            type="text"
            className={`w-full mt-0.5 p-3.5 border rounded-md outline-none ring-0 ${
              errors.mealName
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : ""
            }`}
            placeholder="Digite o nome"
            {...register("mealName")}
          />
          {errors && <p className="text-red-500">{errors.mealName?.message}</p>}
        </div>

        <div className="mt-3">
          <label className={`${errors.mealDescription ? "text-red-500" : ""}`}>
            Descrição da marmita*
          </label>
          <input
            type="text"
            className={`w-full mt-0.5 p-3.5 border rounded-md outline-none ring-0 ${
              errors.mealDescription
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : ""
            }`}
            placeholder="Digite a descrição"
            {...register("mealDescription")}
          />
          {errors && (
            <p className="text-red-500">{errors.mealDescription?.message}</p>
          )}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            className="bg-white w-1/2  border px-8 py-4 rounded-full mt-8 cursor-pointer"
            onClick={() => handleBack(getValues())}
          >
            VOLTAR
          </button>
          <button
            type="submit"
            className="bg-[#e94911] w-1/2 text-white  px-8 py-4 rounded-full mt-8 cursor-pointer"
          >
            REALIZAR DOAÇÃO
          </button>
        </div>
      </form>
    </div>
  );
};
