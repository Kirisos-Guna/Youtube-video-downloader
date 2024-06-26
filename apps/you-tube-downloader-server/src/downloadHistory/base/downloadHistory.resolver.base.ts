/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { DownloadHistory } from "./DownloadHistory";
import { DownloadHistoryCountArgs } from "./DownloadHistoryCountArgs";
import { DownloadHistoryFindManyArgs } from "./DownloadHistoryFindManyArgs";
import { DownloadHistoryFindUniqueArgs } from "./DownloadHistoryFindUniqueArgs";
import { CreateDownloadHistoryArgs } from "./CreateDownloadHistoryArgs";
import { UpdateDownloadHistoryArgs } from "./UpdateDownloadHistoryArgs";
import { DeleteDownloadHistoryArgs } from "./DeleteDownloadHistoryArgs";
import { User } from "../../user/base/User";
import { DownloadHistoryService } from "../downloadHistory.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DownloadHistory)
export class DownloadHistoryResolverBase {
  constructor(
    protected readonly service: DownloadHistoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DownloadHistory",
    action: "read",
    possession: "any",
  })
  async _downloadHistoriesMeta(
    @graphql.Args() args: DownloadHistoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DownloadHistory])
  @nestAccessControl.UseRoles({
    resource: "DownloadHistory",
    action: "read",
    possession: "any",
  })
  async downloadHistories(
    @graphql.Args() args: DownloadHistoryFindManyArgs
  ): Promise<DownloadHistory[]> {
    return this.service.downloadHistories(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DownloadHistory, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DownloadHistory",
    action: "read",
    possession: "own",
  })
  async downloadHistory(
    @graphql.Args() args: DownloadHistoryFindUniqueArgs
  ): Promise<DownloadHistory | null> {
    const result = await this.service.downloadHistory(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DownloadHistory)
  @nestAccessControl.UseRoles({
    resource: "DownloadHistory",
    action: "create",
    possession: "any",
  })
  async createDownloadHistory(
    @graphql.Args() args: CreateDownloadHistoryArgs
  ): Promise<DownloadHistory> {
    return await this.service.createDownloadHistory({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DownloadHistory)
  @nestAccessControl.UseRoles({
    resource: "DownloadHistory",
    action: "update",
    possession: "any",
  })
  async updateDownloadHistory(
    @graphql.Args() args: UpdateDownloadHistoryArgs
  ): Promise<DownloadHistory | null> {
    try {
      return await this.service.updateDownloadHistory({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DownloadHistory)
  @nestAccessControl.UseRoles({
    resource: "DownloadHistory",
    action: "delete",
    possession: "any",
  })
  async deleteDownloadHistory(
    @graphql.Args() args: DeleteDownloadHistoryArgs
  ): Promise<DownloadHistory | null> {
    try {
      return await this.service.deleteDownloadHistory(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(
    @graphql.Parent() parent: DownloadHistory
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
