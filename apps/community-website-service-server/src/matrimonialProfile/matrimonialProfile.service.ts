import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MatrimonialProfileServiceBase } from "./base/matrimonialProfile.service.base";

@Injectable()
export class MatrimonialProfileService extends MatrimonialProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
