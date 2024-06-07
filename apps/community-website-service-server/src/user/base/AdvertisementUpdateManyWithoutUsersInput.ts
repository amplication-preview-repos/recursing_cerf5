/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AdvertisementWhereUniqueInput } from "../../advertisement/base/AdvertisementWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AdvertisementUpdateManyWithoutUsersInput {
  @Field(() => [AdvertisementWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AdvertisementWhereUniqueInput],
  })
  connect?: Array<AdvertisementWhereUniqueInput>;

  @Field(() => [AdvertisementWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AdvertisementWhereUniqueInput],
  })
  disconnect?: Array<AdvertisementWhereUniqueInput>;

  @Field(() => [AdvertisementWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AdvertisementWhereUniqueInput],
  })
  set?: Array<AdvertisementWhereUniqueInput>;
}

export { AdvertisementUpdateManyWithoutUsersInput as AdvertisementUpdateManyWithoutUsersInput };