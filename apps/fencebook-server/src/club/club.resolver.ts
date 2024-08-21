import * as graphql from "@nestjs/graphql";
import { ClubResolverBase } from "./base/club.resolver.base";
import { Club } from "./base/Club";
import { ClubService } from "./club.service";

@graphql.Resolver(() => Club)
export class ClubResolver extends ClubResolverBase {
  constructor(protected readonly service: ClubService) {
    super(service);
  }
}
