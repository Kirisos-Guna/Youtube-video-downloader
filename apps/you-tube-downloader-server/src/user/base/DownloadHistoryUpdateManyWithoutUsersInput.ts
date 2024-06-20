/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DownloadHistoryWhereUniqueInput } from "../../downloadHistory/base/DownloadHistoryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DownloadHistoryUpdateManyWithoutUsersInput {
  @Field(() => [DownloadHistoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DownloadHistoryWhereUniqueInput],
  })
  connect?: Array<DownloadHistoryWhereUniqueInput>;

  @Field(() => [DownloadHistoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DownloadHistoryWhereUniqueInput],
  })
  disconnect?: Array<DownloadHistoryWhereUniqueInput>;

  @Field(() => [DownloadHistoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DownloadHistoryWhereUniqueInput],
  })
  set?: Array<DownloadHistoryWhereUniqueInput>;
}

export { DownloadHistoryUpdateManyWithoutUsersInput as DownloadHistoryUpdateManyWithoutUsersInput };