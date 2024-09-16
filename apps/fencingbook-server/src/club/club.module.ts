import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClubModuleBase } from "./base/club.module.base";
import { ClubService } from "./club.service";
import { ClubController } from "./club.controller";
import { ClubResolver } from "./club.resolver";

@Module({
  imports: [ClubModuleBase, forwardRef(() => AuthModule)],
  controllers: [ClubController],
  providers: [ClubService, ClubResolver],
  exports: [ClubService],
})
export class ClubModule {}
