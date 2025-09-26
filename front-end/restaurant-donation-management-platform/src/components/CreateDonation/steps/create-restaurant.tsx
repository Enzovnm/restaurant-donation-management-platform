import { z } from "zod";
import { donationSchema } from "../donation-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { useDonationStore } from "../../../stores/DonationStore";

const createRestaurantSchema = donationSchema.pick({
  restaurantName: true,
  email: true,
  cnpj: true,
  picture: true,
});

type CreateRestaurantSchema = z.infer<typeof createRestaurantSchema>;

export const CreateRestaurant = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateRestaurantSchema>({
    resolver: zodResolver(createRestaurantSchema),
    defaultValues: useDonationStore.getState(),
  });

  const mealName = useDonationStore((state) => state.mealName);
  const mealDescription = useDonationStore((state) => state.mealDescription);

  const setData = useDonationStore((state) => state.setData);

  const navigate = useNavigate();

  const handleForm = (data: CreateRestaurantSchema) => {
    setData({
      ...data,
      mealName,
      mealDescription,
    });
    navigate("/create-donation/meal");
  };

  return (
    <div className="w-full">
      <div>
        <h1 className="text-xl text-center">Crie seu restaurante!</h1>
      </div>
      <form className="mt-8" onSubmit={handleSubmit(handleForm)}>
        <div>
          <label className={`${errors.restaurantName ? "text-red-500" : ""}`}>
            Nome do restaurante*
          </label>
          <input
            type="text"
            className={`w-full mt-0.5 p-3.5 border rounded-md outline-none ring-0 ${
              errors.restaurantName
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : ""
            }`}
            placeholder="Digite o nome"
            {...register("restaurantName")}
          />
          {errors && (
            <p className="text-red-500">{errors.restaurantName?.message}</p>
          )}
        </div>

        <div className="mt-3">
          <label className={`${errors.email ? "text-red-500" : ""}`}>
            E-mail*
          </label>
          <input
            type="email"
            className={`w-full mt-0.5 p-3.5 border rounded-md outline-none ring-0 ${
              errors.email
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : ""
            }`}
            placeholder="Digite o e-mail"
            {...register("email")}
          />
          {errors && <p className="text-red-500">{errors.email?.message}</p>}
        </div>

        <div className="mt-3">
          <label className={`${errors.cnpj ? "text-red-500" : ""}`}>
            CNPJ*
          </label>
          <input
            type="text"
            className={`w-full mt-0.5 p-3.5 border rounded-md outline-none ring-0 ${
              errors.cnpj
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : ""
            }`}
            placeholder="Digite o CNPJ"
            {...register("cnpj")}
          />
          {errors && <p className="text-red-500">{errors.cnpj?.message}</p>}
        </div>

        <div className="mt-3">
          <label>URL da imagem</label>
          <input
            type="text"
            className="w-full mt-0.5 p-3.5 border rounded-md"
            placeholder="Digite a URL"
            {...register("picture")}
          />
          {errors && <p className="text-red-500">{errors.picture?.message}</p>}
        </div>

        <button className="bg-[#e94911] w-full text-white  px-8 py-4 rounded-full mt-8 cursor-pointer">
          AVANÇAR
        </button>
      </form>
    </div>
  );
};
