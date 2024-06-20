import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DownloadHistoryServiceBase } from "./base/downloadHistory.service.base";

@Injectable()
export class DownloadHistoryService extends DownloadHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
