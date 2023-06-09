import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class DeleteUserData {
    @Field()
    @IsNotEmpty()
    userId: string;
}