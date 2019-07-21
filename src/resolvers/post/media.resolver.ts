import { Resolver, Mutation, Arg, UseMiddleware, Ctx } from "type-graphql";
import { GraphQLUpload } from "graphql-upload";
import { createWriteStream } from "fs";
import { Upload } from '../../util/upload';
import path from 'path';
import { auth } from '../../middlewares/auth.middleware';


@Resolver()
export class MediaResolver {
    @UseMiddleware(auth)
    @Mutation(() => String, { nullable: true })
    async addProfilePicture(@Arg("picture", () => GraphQLUpload)
    {
        filename,
        createReadStream,
    }: Upload, @Ctx() { req }: any): Promise<string | null> {

        return new Promise(async (resolve, reject) =>
            createReadStream()
                .pipe(createWriteStream(path.join(__dirname, '..', '..', 'images', `${req.userId}.${Date.now()}.${filename}`)))
                .on("finish", () => resolve(`${req.userId}.${Date.now()}.${filename}`))
                .on("error", () => reject(null))
        );
    }
}