/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString, ValidateNested } from "class-validator";
import { UserUpdateManyWithoutMatrimonialProfilesInput } from "./UserUpdateManyWithoutMatrimonialProfilesInput";
import { Type } from "class-transformer";

@InputType()
class MatrimonialProfileUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  compatibilityScore?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  profileCompatibilityScore?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  profileUser?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutMatrimonialProfilesInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutMatrimonialProfilesInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutMatrimonialProfilesInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutMatrimonialProfilesInput;
}

export { MatrimonialProfileUpdateInput as MatrimonialProfileUpdateInput };
