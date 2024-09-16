import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SportsHallServiceBase } from "./base/sportsHall.service.base";

@Injectable()
export class SportsHallService extends SportsHallServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
