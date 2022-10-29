import { UsersService } from '../users/users.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { MailerService } from '../mailer/mailer.service';
export declare class ChangePasswordService {
    private readonly usersService;
    private readonly mailerService;
    constructor(usersService: UsersService, mailerService: MailerService);
    changePassword(changePasswordDto: ChangePasswordDto): Promise<any>;
    private sendMailChangePassword;
}
