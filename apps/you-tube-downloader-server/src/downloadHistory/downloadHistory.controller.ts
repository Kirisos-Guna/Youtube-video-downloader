import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DownloadHistoryService } from "./downloadHistory.service";
import { DownloadHistoryControllerBase } from "./base/downloadHistory.controller.base";

@swagger.ApiTags("downloadHistories")
@common.Controller("downloadHistories")
export class DownloadHistoryController extends DownloadHistoryControllerBase {
  constructor(
    protected readonly service: DownloadHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
