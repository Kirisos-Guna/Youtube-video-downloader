import { DownloadHistory } from "../downloadHistory/DownloadHistory";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  downloadHistories?: Array<DownloadHistory>;
  email: string | null;
  firstName: string | null;
  hashedPassword: string | null;
  id: string;
  lastName: string | null;
  passwordHash: string | null;
  role: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  userRole: string | null;
};
