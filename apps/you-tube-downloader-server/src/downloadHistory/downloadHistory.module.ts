import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DownloadHistoryModuleBase } from "./base/downloadHistory.module.base";
import { DownloadHistoryService } from "./downloadHistory.service";
import { DownloadHistoryController } from "./downloadHistory.controller";
import { DownloadHistoryResolver } from "./downloadHistory.resolver";

@Module({
  imports: [DownloadHistoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [DownloadHistoryController],
  providers: [DownloadHistoryService, DownloadHistoryResolver],
  exports: [DownloadHistoryService],
})
export class DownloadHistoryModule {}
