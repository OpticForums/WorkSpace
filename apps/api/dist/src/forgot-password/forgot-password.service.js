"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const users_entity_1 = require("../users/entities/users.entity");
const mailer_service_1 = require("../mailer/mailer.service");
const bcrypt = require("bcrypt");
const utils_service_1 = require("../utils/utils.service");
let ForgotPasswordService = class ForgotPasswordService {
    constructor(userRepository, mailerService, utilsService) {
        this.userRepository = userRepository;
        this.mailerService = mailerService;
        this.utilsService = utilsService;
    }
    async forgotPassword(forgotPasswordDto) {
        const userUpdate = await this.userRepository.findOneBy({
            email: forgotPasswordDto.email,
        });
        const passwordRand = this.utilsService.generatePassword();
        userUpdate.password = bcrypt.hashSync(passwordRand, 8);
        this.sendMailForgotPassword(userUpdate.email, passwordRand);
        return await this.userRepository.save(userUpdate);
    }
    sendMailForgotPassword(email, password) {
        this.mailerService
            .sendMail({
            to: email,
            from: 'from@example.com',
            subject: 'Forgot Password successful ✔',
            text: 'Forgot Password successful!',
            template: 'index',
            context: {
                title: 'Forgot Password successful!',
                description: 'Request Reset Password Successfully!  ✔, This is your new password: ' +
                    password,
            },
        })
            .then((response) => {
            console.log(response);
            console.log('Forgot Password: Send Mail successfully!');
        })
            .catch((err) => {
            console.log(err);
            console.log('Forgot Password: Send Mail Failed!');
        });
    }
};
ForgotPasswordService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(users_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        mailer_service_1.MailerService,
        utils_service_1.UtilsService])
], ForgotPasswordService);
exports.ForgotPasswordService = ForgotPasswordService;
//# sourceMappingURL=forgot-password.service.js.map