import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DownloadHistoryWhereInput = {
  downloadedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  quality?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  videoUrl?: StringNullableFilter;
};
