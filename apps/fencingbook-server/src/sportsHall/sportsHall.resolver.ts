import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SportsHallResolverBase } from "./base/sportsHall.resolver.base";
import { SportsHall } from "./base/SportsHall";
import { SportsHallService } from "./sportsHall.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SportsHall)
export class SportsHallResolver extends SportsHallResolverBase {
  constructor(
    protected readonly service: SportsHallService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
