import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DownloadHistoryResolverBase } from "./base/downloadHistory.resolver.base";
import { DownloadHistory } from "./base/DownloadHistory";
import { DownloadHistoryService } from "./downloadHistory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DownloadHistory)
export class DownloadHistoryResolver extends DownloadHistoryResolverBase {
  constructor(
    protected readonly service: DownloadHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
