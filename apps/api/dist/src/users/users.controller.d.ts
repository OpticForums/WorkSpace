import { UsersService } from './users.service';
import { UserProfileDto } from './dto/user-profile.dto';
import { UserUpdateDto } from './dto/user-update.dto';
import { IUsers } from './interfaces/users.interface';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAllUser(): Promise<IUsers[]>;
    findOneUser(userId: string): Promise<IUsers>;
    getUser(res: any, userId: string): Promise<IUsers>;
    updateProfileUser(res: any, userId: string, userProfileDto: UserProfileDto): Promise<any>;
    updateUser(res: any, userId: string, userUpdateDto: UserUpdateDto): Promise<any>;
    deleteUser(userId: string): Promise<void>;
}
