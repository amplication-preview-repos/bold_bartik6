import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SportsHallService } from "./sportsHall.service";
import { SportsHallControllerBase } from "./base/sportsHall.controller.base";

@swagger.ApiTags("sportsHalls")
@common.Controller("sportsHalls")
export class SportsHallController extends SportsHallControllerBase {
  constructor(
    protected readonly service: SportsHallService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
