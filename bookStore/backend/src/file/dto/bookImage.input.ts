import { Upload } from '../Scalar/Upload.scalar';
import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class UploadUserProfilePicInput {
    @Field()
    file : Upload
}