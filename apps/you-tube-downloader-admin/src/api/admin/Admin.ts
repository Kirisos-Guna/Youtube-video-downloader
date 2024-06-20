export type Admin = {
  createdAt: Date;
  email: string | null;
  id: string;
  passwordHash: string | null;
  role: string | null;
  updatedAt: Date;
  username: string | null;
};
