import { z } from "zod";
import { donationSchema } from "../donation-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
  });

  const handleForm = (data: CreateRestaurantSchema) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div className="w-full">
      <div>
        <h1 className="text-xl text-center">Crie seu restaurante!</h1>
      </div>
      <form className="mt-8" onSubmit={handleSubmit(handleForm)}>
        <div>
          <label>Nome do restaurante*</label>
          <input
            type="text"
            className="w-full mt-1 p-3.5 border rounded-md"
            placeholder="Digite o nome"
            {...register("restaurantName")}
          />
        </div>

        <div className="mt-3">
          <label>E-mail*</label>
          <input
            type="email"
            className="w-full mt-0.5 p-3.5 border rounded-md"
            placeholder="Digite o e-mail"
            {...register("email")}
          />
        </div>

        <div className="mt-3">
          <label>CNPJ*</label>
          <input
            type="text"
            className="w-full mt-0.5 p-3.5 border rounded-md"
            placeholder="Digite o CNPJ"
            {...register("cnpj")}
          />
        </div>

        <div className="mt-3">
          <label>URL da imagem</label>
          <input
            type="text"
            className="w-full mt-0.5 p-3.5 border rounded-md"
            placeholder="Digite a URL"
            {...register("picture")}
          />
        </div>

        <button className="bg-[#e94911] w-full text-white  px-8 py-4 rounded-full mt-8 cursor-pointer">
          AVANÇAR
        </button>
      </form>
    </div>
  );
};
