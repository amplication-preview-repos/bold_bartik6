import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserClubModuleBase } from "./base/userClub.module.base";
import { UserClubService } from "./userClub.service";
import { UserClubController } from "./userClub.controller";
import { UserClubResolver } from "./userClub.resolver";

@Module({
  imports: [UserClubModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserClubController],
  providers: [UserClubService, UserClubResolver],
  exports: [UserClubService],
})
export class UserClubModule {}
