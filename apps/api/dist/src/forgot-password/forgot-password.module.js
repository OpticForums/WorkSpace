"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordModule = void 0;
const common_1 = require("@nestjs/common");
const forgot_password_service_1 = require("./forgot-password.service");
const forgot_password_controller_1 = require("./forgot-password.controller");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../users/entities/users.entity");
const users_service_1 = require("../users/users.service");
const mailer_module_1 = require("../mailer/mailer.module");
const utils_module_1 = require("../utils/utils.module");
let ForgotPasswordModule = class ForgotPasswordModule {
};
ForgotPasswordModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([users_entity_1.Users]), mailer_module_1.MailerModule, utils_module_1.UtilsModule],
        providers: [forgot_password_service_1.ForgotPasswordService, users_service_1.UsersService],
        controllers: [forgot_password_controller_1.ForgotPasswordController],
    })
], ForgotPasswordModule);
exports.ForgotPasswordModule = ForgotPasswordModule;
//# sourceMappingURL=forgot-password.module.js.map