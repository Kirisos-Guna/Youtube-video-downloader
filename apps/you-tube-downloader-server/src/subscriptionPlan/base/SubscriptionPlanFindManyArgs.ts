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
import { SubscriptionPlanWhereInput } from "./SubscriptionPlanWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SubscriptionPlanOrderByInput } from "./SubscriptionPlanOrderByInput";

@ArgsType()
class SubscriptionPlanFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SubscriptionPlanWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SubscriptionPlanWhereInput, { nullable: true })
  @Type(() => SubscriptionPlanWhereInput)
  where?: SubscriptionPlanWhereInput;

  @ApiProperty({
    required: false,
    type: [SubscriptionPlanOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SubscriptionPlanOrderByInput], { nullable: true })
  @Type(() => SubscriptionPlanOrderByInput)
  orderBy?: Array<SubscriptionPlanOrderByInput>;

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

export { SubscriptionPlanFindManyArgs as SubscriptionPlanFindManyArgs };
