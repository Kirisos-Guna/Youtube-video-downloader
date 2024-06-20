export type SubscriptionPlan = {
  createdAt: Date;
  downloadLimit: number | null;
  features: string | null;
  id: string;
  name: string | null;
  price: number | null;
  qualityLimit: string | null;
  updatedAt: Date;
};
