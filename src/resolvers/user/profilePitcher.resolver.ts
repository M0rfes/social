import { Resolver, Mutation, Arg, UseMiddleware, Ctx } from "type-graphql";
import { GraphQLUpload } from "graphql-upload";
import { createWriteStream } from "fs";
import { Upload } from "../../util/upload";
import path from "path";
import { auth } from "../../middlewares/auth.middleware";
import { User } from "../../models/user.model";

// TODO: make a higher order resolver for uploading media
@Resolver(User)
export class ProfilePictureResolver {
  @UseMiddleware(auth)
  @Mutation(() => String, { nullable: true })
  async addProfilePicture(
    @Arg("picture", () => GraphQLUpload)
    { createReadStream, mimetype }: Upload,

    @Ctx() { req }: any,
  ): Promise<string | null> {
    const ext = mimetype.split("/")[1];
    return new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(
          createWriteStream(
            path.join(
              __dirname,
              "..",
              "..",
              "images",
              "profile",
              `${req.userId}.${ext}`,
            ),
          ),
        )
        .on("finish", () => resolve(`profile/${req.userId}.${ext}`))
        .on("error", () => reject(null)),
    );
  }
}
