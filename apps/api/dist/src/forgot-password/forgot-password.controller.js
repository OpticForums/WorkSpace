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
exports.ForgotPasswordController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const forgot_password_service_1 = require("../forgot-password/forgot-password.service");
const forgot_password_dto_1 = require("./dto/forgot-password.dto");
let ForgotPasswordController = class ForgotPasswordController {
    constructor(forgotPasswordService) {
        this.forgotPasswordService = forgotPasswordService;
    }
    async forgotPassword(res, forgotPasswordDto) {
        try {
            await this.forgotPasswordService.forgotPassword(forgotPasswordDto);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Request Reset Password Successfully!',
                status: 200,
            });
        }
        catch (err) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Error: Forgot password failed!',
                status: 400,
            });
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, forgot_password_dto_1.ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], ForgotPasswordController.prototype, "forgotPassword", null);
ForgotPasswordController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth/forgot-password'),
    __metadata("design:paramtypes", [forgot_password_service_1.ForgotPasswordService])
], ForgotPasswordController);
exports.ForgotPasswordController = ForgotPasswordController;
//# sourceMappingURL=forgot-password.controller.js.map