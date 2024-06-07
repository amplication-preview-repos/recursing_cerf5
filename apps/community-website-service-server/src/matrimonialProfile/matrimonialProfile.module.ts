import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MatrimonialProfileModuleBase } from "./base/matrimonialProfile.module.base";
import { MatrimonialProfileService } from "./matrimonialProfile.service";
import { MatrimonialProfileController } from "./matrimonialProfile.controller";
import { MatrimonialProfileResolver } from "./matrimonialProfile.resolver";

@Module({
  imports: [MatrimonialProfileModuleBase, forwardRef(() => AuthModule)],
  controllers: [MatrimonialProfileController],
  providers: [MatrimonialProfileService, MatrimonialProfileResolver],
  exports: [MatrimonialProfileService],
})
export class MatrimonialProfileModule {}
