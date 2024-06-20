import { DownloadHistory as TDownloadHistory } from "../api/downloadHistory/DownloadHistory";

export const DOWNLOADHISTORY_TITLE_FIELD = "quality";

export const DownloadHistoryTitle = (record: TDownloadHistory): string => {
  return record.quality?.toString() || String(record.id);
};
