import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";




class UsersService {

    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string) {

        //Verificar se o usuario existe

        const userExistis = await this.usersRepository.findOne({
            email,
        })

        //Se nao existir, salvar no DB

        if (userExistis) {
            return userExistis;
        }

        //Se existir, retornar user

        const user = this.usersRepository.create({
            email,
        });

        await this.usersRepository.save(user);

        return user;
    }
}

export { UsersService }