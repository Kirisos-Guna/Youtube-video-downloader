import { User } from "../user/User";

export type DownloadHistory = {
  createdAt: Date;
  downloadedAt: Date | null;
  id: string;
  quality: string | null;
  updatedAt: Date;
  user?: User | null;
  videoUrl: string | null;
};
