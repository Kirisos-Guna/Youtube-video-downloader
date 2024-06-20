import { DownloadHistoryUpdateManyWithoutUsersInput } from "./DownloadHistoryUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  downloadHistories?: DownloadHistoryUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  hashedPassword?: string | null;
  lastName?: string | null;
  password?: string;
  passwordHash?: string | null;
  role?: string | null;
  roles?: InputJsonValue;
  username?: string;
  userRole?: string | null;
};
