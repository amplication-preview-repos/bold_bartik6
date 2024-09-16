/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UserClubWhereUniqueInput } from "../../userClub/base/UserClubWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserClubCreateNestedManyWithoutClubsInput {
  @Field(() => [UserClubWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserClubWhereUniqueInput],
  })
  connect?: Array<UserClubWhereUniqueInput>;
}

export { UserClubCreateNestedManyWithoutClubsInput as UserClubCreateNestedManyWithoutClubsInput };
