import { z } from "zod";

export const donationSchema = z.object({
  restaurantName: z.string().min(1),
  email: z.string().email(),
  cnpj: z.string().length(14),
  picture: z.string().optional(),
  mealName: z.string().min(1),
  mealDescription: z.string().min(1),
});

export type DonationSchema = z.infer<typeof donationSchema>;
