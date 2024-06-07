import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdvertisementModuleBase } from "./base/advertisement.module.base";
import { AdvertisementService } from "./advertisement.service";
import { AdvertisementController } from "./advertisement.controller";
import { AdvertisementResolver } from "./advertisement.resolver";

@Module({
  imports: [AdvertisementModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdvertisementController],
  providers: [AdvertisementService, AdvertisementResolver],
  exports: [AdvertisementService],
})
export class AdvertisementModule {}
