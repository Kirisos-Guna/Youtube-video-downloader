import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DownloadHistoryCreateInput = {
  downloadedAt?: Date | null;
  quality?: string | null;
  user?: UserWhereUniqueInput | null;
  videoUrl?: string | null;
};
