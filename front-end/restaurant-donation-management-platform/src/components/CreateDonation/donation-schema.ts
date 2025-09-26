import { z } from "zod";

export const donationSchema = z.object({
  restaurantName: z.string().min(1, "Nome do restaurante é obrigatório"),
  email: z.string().email("Email inválido"),
  cnpj: z.string().length(14, "O CNPJ deve conter 14 dígitos"),
  picture: z.string().url().or(z.literal("")).optional(),
  mealName: z.string().min(1, "Nome da marmita é obrigatório"),
  mealDescription: z.string().min(1, "Descrição da marmita é obrigatório"),
});

export const apiDonationSchema = z
  .object({
    restaurantName: donationSchema.shape.restaurantName,
    email: donationSchema.shape.email,
    cnpj: donationSchema.shape.cnpj,
    picture: donationSchema.shape.picture,
    meals: z.array(
      z.object({
        name: donationSchema.shape.mealName,
        description: donationSchema.shape.mealDescription,
      })
    ),
  })
  .transform((obj) => ({
    ...obj,
    name: obj.restaurantName,
  }));

export type ApiDonationSchema = z.infer<typeof apiDonationSchema>;

export type DonationSchema = z.infer<typeof donationSchema>;
