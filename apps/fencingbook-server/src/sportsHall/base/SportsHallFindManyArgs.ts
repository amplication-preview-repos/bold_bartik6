/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SportsHallWhereInput } from "./SportsHallWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SportsHallOrderByInput } from "./SportsHallOrderByInput";

@ArgsType()
class SportsHallFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SportsHallWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SportsHallWhereInput, { nullable: true })
  @Type(() => SportsHallWhereInput)
  where?: SportsHallWhereInput;

  @ApiProperty({
    required: false,
    type: [SportsHallOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SportsHallOrderByInput], { nullable: true })
  @Type(() => SportsHallOrderByInput)
  orderBy?: Array<SportsHallOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SportsHallFindManyArgs as SportsHallFindManyArgs };
