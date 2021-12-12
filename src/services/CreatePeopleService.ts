import { getCustomRepository } from "typeorm";
import { PeoplesRepositories } from "../repositores/PeoplesRepositores";

class CreatePeopleService {
  async execute ({ primaryname, secondyname, email }){
    const peopleRepository = getCustomRepository(PeoplesRepositories);
    if(!email) {
      throw new Error ("Email incorrect");
    };
    const peopleAlreadyExists = await peopleRepository.findOne ({
      email,
    });
    if(peopleAlreadyExists){
      throw new Error ("People already exists");
    };
    const people = peopleRepository.create({
      primaryname,
      secondyname,
      email,
    });
    
    await peopleRepository.save(people);
    return people;
  }
}
export { CreatePeopleService };