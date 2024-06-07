import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MatrimonialProfileResolverBase } from "./base/matrimonialProfile.resolver.base";
import { MatrimonialProfile } from "./base/MatrimonialProfile";
import { MatrimonialProfileService } from "./matrimonialProfile.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MatrimonialProfile)
export class MatrimonialProfileResolver extends MatrimonialProfileResolverBase {
  constructor(
    protected readonly service: MatrimonialProfileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
