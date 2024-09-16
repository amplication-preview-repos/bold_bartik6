import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserClubServiceBase } from "./base/userClub.service.base";

@Injectable()
export class UserClubService extends UserClubServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
