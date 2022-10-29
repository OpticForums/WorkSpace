import { Repository, UpdateResult } from 'typeorm';
import { Users } from './entities/users.entity';
import { IUsers } from './interfaces/users.interface';
import { UserDto } from './dto/user.dto';
import { UserProfileDto } from './dto/user-profile.dto';
import { UserUpdateDto } from './dto/user-update.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<Users>);
    findAll(): Promise<Users[]>;
    findByEmail(email: string): Promise<Users>;
    findById(userId: string): Promise<Users>;
    create(userDto: UserDto): Promise<IUsers>;
    updateByEmail(email: string): Promise<Users>;
    updateByPassword(email: string, password: string): Promise<Users>;
    updateProfileUser(id: string, userProfileDto: UserProfileDto): Promise<Users>;
    updateUser(id: string, userUpdateDto: UserUpdateDto): Promise<UpdateResult>;
    deleteUser(id: string): Promise<void>;
}
