/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FamilyMemberService } from "../familyMember.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FamilyMemberCreateInput } from "./FamilyMemberCreateInput";
import { FamilyMember } from "./FamilyMember";
import { FamilyMemberFindManyArgs } from "./FamilyMemberFindManyArgs";
import { FamilyMemberWhereUniqueInput } from "./FamilyMemberWhereUniqueInput";
import { FamilyMemberUpdateInput } from "./FamilyMemberUpdateInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FamilyMemberControllerBase {
  constructor(
    protected readonly service: FamilyMemberService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FamilyMember })
  @nestAccessControl.UseRoles({
    resource: "FamilyMember",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFamilyMember(
    @common.Body() data: FamilyMemberCreateInput
  ): Promise<FamilyMember> {
    return await this.service.createFamilyMember({
      data: data,
      select: {
        createdAt: true,
        familyOrigin: true,
        familyRelationship: true,
        id: true,
        origin: true,
        relationship: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [FamilyMember] })
  @ApiNestedQuery(FamilyMemberFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FamilyMember",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async familyMembers(@common.Req() request: Request): Promise<FamilyMember[]> {
    const args = plainToClass(FamilyMemberFindManyArgs, request.query);
    return this.service.familyMembers({
      ...args,
      select: {
        createdAt: true,
        familyOrigin: true,
        familyRelationship: true,
        id: true,
        origin: true,
        relationship: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FamilyMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FamilyMember",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async familyMember(
    @common.Param() params: FamilyMemberWhereUniqueInput
  ): Promise<FamilyMember | null> {
    const result = await this.service.familyMember({
      where: params,
      select: {
        createdAt: true,
        familyOrigin: true,
        familyRelationship: true,
        id: true,
        origin: true,
        relationship: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FamilyMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FamilyMember",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFamilyMember(
    @common.Param() params: FamilyMemberWhereUniqueInput,
    @common.Body() data: FamilyMemberUpdateInput
  ): Promise<FamilyMember | null> {
    try {
      return await this.service.updateFamilyMember({
        where: params,
        data: data,
        select: {
          createdAt: true,
          familyOrigin: true,
          familyRelationship: true,
          id: true,
          origin: true,
          relationship: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FamilyMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FamilyMember",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFamilyMember(
    @common.Param() params: FamilyMemberWhereUniqueInput
  ): Promise<FamilyMember | null> {
    try {
      return await this.service.deleteFamilyMember({
        where: params,
        select: {
          createdAt: true,
          familyOrigin: true,
          familyRelationship: true,
          id: true,
          origin: true,
          relationship: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/users")
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findUsers(
    @common.Req() request: Request,
    @common.Param() params: FamilyMemberWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUsers(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,

        familyMember: {
          select: {
            id: true,
          },
        },

        firstName: true,
        id: true,
        lastName: true,

        matrimonialProfile: {
          select: {
            id: true,
          },
        },

        profileVisible: true,
        role: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "FamilyMember",
    action: "update",
    possession: "any",
  })
  async connectUsers(
    @common.Param() params: FamilyMemberWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        connect: body,
      },
    };
    await this.service.updateFamilyMember({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "FamilyMember",
    action: "update",
    possession: "any",
  })
  async updateUsers(
    @common.Param() params: FamilyMemberWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        set: body,
      },
    };
    await this.service.updateFamilyMember({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "FamilyMember",
    action: "update",
    possession: "any",
  })
  async disconnectUsers(
    @common.Param() params: FamilyMemberWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        disconnect: body,
      },
    };
    await this.service.updateFamilyMember({
      where: params,
      data,
      select: { id: true },
    });
  }
}