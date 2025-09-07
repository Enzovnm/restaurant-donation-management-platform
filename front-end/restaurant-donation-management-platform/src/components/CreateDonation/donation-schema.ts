import { z } from "zod";

export const donationSchema = z.object({
  restaurantName: z.string().min(1, "Nome do restaurante é obrigatório"),
  email: z.string().email("Email inválido"),
  cnpj: z.string().length(14, "O CNPJ deve conter 14 dígitos"),
  picture: z.string().optional(),
  mealName: z.string().min(1, "Nome da marmita é obrigatório"),
  mealDescription: z.string().min(1, "Descrição da marmita é obrigatório"),
});

export type DonationSchema = z.infer<typeof donationSchema>;
