import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MatrimonialProfileService } from "./matrimonialProfile.service";
import { MatrimonialProfileControllerBase } from "./base/matrimonialProfile.controller.base";

@swagger.ApiTags("matrimonialProfiles")
@common.Controller("matrimonialProfiles")
export class MatrimonialProfileController extends MatrimonialProfileControllerBase {
  constructor(
    protected readonly service: MatrimonialProfileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
