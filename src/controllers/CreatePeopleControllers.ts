import { Request, Response } from "express";
import { CreatePeopleService } from "../services/CreatePeopleService";

class CreatePeopleController {
  async handle(request: Request, response: Response){
    const { primaryname, secondyname, email } = request.body;
    const createPeopleService = new CreatePeopleService();
    const people = await createPeopleService.execute({ primaryname, secondyname, email });
    return response.json(people);
  }
}
export { CreatePeopleController };