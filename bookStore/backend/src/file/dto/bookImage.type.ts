import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('UserUploadProfilePicType')
export class UserUploadProfilePicType {
    @Field()
    success : boolean;
}