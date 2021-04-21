import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository";




class UsersService {
    async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository);
        //Verificar se o usuario existe

        const userExistis = await usersRepository.findOne({
            email,
        })

        //Se nao existir, salvar no DB

        if (userExistis) {
            return userExistis;
        }

        //Se existir, retornar user

        const user = usersRepository.create({
            email,
        });

        await usersRepository.save(user);

        return user;
    }
}

export { UsersService }