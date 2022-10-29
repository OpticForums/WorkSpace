import { Repository } from 'typeorm';
import { Users } from '../users/entities/users.entity';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { MailerService } from '../mailer/mailer.service';
import { UtilsService } from '../utils/utils.service';
export declare class ForgotPasswordService {
    private readonly userRepository;
    private readonly mailerService;
    private readonly utilsService;
    constructor(userRepository: Repository<Users>, mailerService: MailerService, utilsService: UtilsService);
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<any>;
    private sendMailForgotPassword;
}
