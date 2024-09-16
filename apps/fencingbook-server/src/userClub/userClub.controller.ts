import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserClubService } from "./userClub.service";
import { UserClubControllerBase } from "./base/userClub.controller.base";

@swagger.ApiTags("userClubs")
@common.Controller("userClubs")
export class UserClubController extends UserClubControllerBase {
  constructor(
    protected readonly service: UserClubService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
