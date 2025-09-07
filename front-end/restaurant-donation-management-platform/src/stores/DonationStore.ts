import { create } from "zustand";
import type { DonationSchema } from "../components/CreateDonation/donation-schema";

type DonationState = Partial<DonationSchema> & {
  setData: (data: Partial<DonationSchema>) => void;
};

export const useDonationStore = create<DonationState>((set) => ({
  setData: (data) => set(data),
}));
