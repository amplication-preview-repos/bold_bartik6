import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SportsHallModuleBase } from "./base/sportsHall.module.base";
import { SportsHallService } from "./sportsHall.service";
import { SportsHallController } from "./sportsHall.controller";
import { SportsHallResolver } from "./sportsHall.resolver";

@Module({
  imports: [SportsHallModuleBase, forwardRef(() => AuthModule)],
  controllers: [SportsHallController],
  providers: [SportsHallService, SportsHallResolver],
  exports: [SportsHallService],
})
export class SportsHallModule {}
