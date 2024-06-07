import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdvertisementService } from "./advertisement.service";
import { AdvertisementControllerBase } from "./base/advertisement.controller.base";

@swagger.ApiTags("advertisements")
@common.Controller("advertisements")
export class AdvertisementController extends AdvertisementControllerBase {
  constructor(
    protected readonly service: AdvertisementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
