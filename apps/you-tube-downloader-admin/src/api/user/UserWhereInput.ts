import { DownloadHistoryListRelationFilter } from "../downloadHistory/DownloadHistoryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  downloadHistories?: DownloadHistoryListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  hashedPassword?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  passwordHash?: StringNullableFilter;
  role?: StringNullableFilter;
  username?: StringFilter;
  userRole?: StringNullableFilter;
};
