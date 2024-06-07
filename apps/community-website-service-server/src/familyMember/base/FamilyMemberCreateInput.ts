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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { UserCreateNestedManyWithoutFamilyMembersInput } from "./UserCreateNestedManyWithoutFamilyMembersInput";
import { Type } from "class-transformer";

@InputType()
class FamilyMemberCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  familyOrigin?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  familyRelationship?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  origin?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  relationship?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutFamilyMembersInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutFamilyMembersInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutFamilyMembersInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutFamilyMembersInput;
}

export { FamilyMemberCreateInput as FamilyMemberCreateInput };