import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AdvertisementResolverBase } from "./base/advertisement.resolver.base";
import { Advertisement } from "./base/Advertisement";
import { AdvertisementService } from "./advertisement.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Advertisement)
export class AdvertisementResolver extends AdvertisementResolverBase {
  constructor(
    protected readonly service: AdvertisementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
