import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DownloadHistoryUpdateInput = {
  downloadedAt?: Date | null;
  quality?: string | null;
  user?: UserWhereUniqueInput | null;
  videoUrl?: string | null;
};
