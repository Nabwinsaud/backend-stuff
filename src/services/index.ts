import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Route,
  Query,
  SuccessResponse,
} from "tsoa";
import { User, UserCreationParams, UserCreation } from "./userServices";

@Route("users")
export class UserController extends Controller {
  @Get("{userId")
  public async getUser(
    @Path() userId: number,
    @Query() name?: string
  ): Promise<User> {
    return new UserCreation().get(userId, name);
  }

  @SuccessResponse("201", "created")
  @Post()
  public async creatUser(
    @Body() requestBody: UserCreationParams
  ): Promise<void> {
    this.setStatus(201);
    new UserCreation().create(requestBody);
    return;
  }
}
