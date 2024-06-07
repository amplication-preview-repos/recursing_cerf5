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
import { MatrimonialProfile } from "./MatrimonialProfile";
import { MatrimonialProfileCountArgs } from "./MatrimonialProfileCountArgs";
import { MatrimonialProfileFindManyArgs } from "./MatrimonialProfileFindManyArgs";
import { MatrimonialProfileFindUniqueArgs } from "./MatrimonialProfileFindUniqueArgs";
import { CreateMatrimonialProfileArgs } from "./CreateMatrimonialProfileArgs";
import { UpdateMatrimonialProfileArgs } from "./UpdateMatrimonialProfileArgs";
import { DeleteMatrimonialProfileArgs } from "./DeleteMatrimonialProfileArgs";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { MatrimonialProfileService } from "../matrimonialProfile.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MatrimonialProfile)
export class MatrimonialProfileResolverBase {
  constructor(
    protected readonly service: MatrimonialProfileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MatrimonialProfile",
    action: "read",
    possession: "any",
  })
  async _matrimonialProfilesMeta(
    @graphql.Args() args: MatrimonialProfileCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MatrimonialProfile])
  @nestAccessControl.UseRoles({
    resource: "MatrimonialProfile",
    action: "read",
    possession: "any",
  })
  async matrimonialProfiles(
    @graphql.Args() args: MatrimonialProfileFindManyArgs
  ): Promise<MatrimonialProfile[]> {
    return this.service.matrimonialProfiles(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MatrimonialProfile, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MatrimonialProfile",
    action: "read",
    possession: "own",
  })
  async matrimonialProfile(
    @graphql.Args() args: MatrimonialProfileFindUniqueArgs
  ): Promise<MatrimonialProfile | null> {
    const result = await this.service.matrimonialProfile(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MatrimonialProfile)
  @nestAccessControl.UseRoles({
    resource: "MatrimonialProfile",
    action: "create",
    possession: "any",
  })
  async createMatrimonialProfile(
    @graphql.Args() args: CreateMatrimonialProfileArgs
  ): Promise<MatrimonialProfile> {
    return await this.service.createMatrimonialProfile({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MatrimonialProfile)
  @nestAccessControl.UseRoles({
    resource: "MatrimonialProfile",
    action: "update",
    possession: "any",
  })
  async updateMatrimonialProfile(
    @graphql.Args() args: UpdateMatrimonialProfileArgs
  ): Promise<MatrimonialProfile | null> {
    try {
      return await this.service.updateMatrimonialProfile({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => MatrimonialProfile)
  @nestAccessControl.UseRoles({
    resource: "MatrimonialProfile",
    action: "delete",
    possession: "any",
  })
  async deleteMatrimonialProfile(
    @graphql.Args() args: DeleteMatrimonialProfileArgs
  ): Promise<MatrimonialProfile | null> {
    try {
      return await this.service.deleteMatrimonialProfile(args);
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
  @graphql.ResolveField(() => [User], { name: "users" })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findUsers(
    @graphql.Parent() parent: MatrimonialProfile,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}