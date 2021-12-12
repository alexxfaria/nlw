import { EntityRepository, Repository } from "typeorm";
import { People } from "../entities/People";

@EntityRepository(People)
class PeoplesRepositories extends Repository<People> {

};
export { PeoplesRepositories };