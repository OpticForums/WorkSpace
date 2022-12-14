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
exports.ChangePasswordController = void 0;
const common_1 = require("@nestjs/common");
const change_password_service_1 = require("../change-password/change-password.service");
const passport_1 = require("@nestjs/passport");
const change_password_dto_1 = require("./dto/change-password.dto");
const swagger_1 = require("@nestjs/swagger");
let ChangePasswordController = class ChangePasswordController {
    constructor(changePasswordService) {
        this.changePasswordService = changePasswordService;
    }
    async changePassword(res, changePasswordDto) {
        try {
            await this.changePasswordService.changePassword(changePasswordDto);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Request Change Password Successfully!',
                status: 200,
            });
        }
        catch (err) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Error: Change password failed!',
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
    __metadata("design:paramtypes", [Object, change_password_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], ChangePasswordController.prototype, "changePassword", null);
ChangePasswordController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('auth/change-password'),
    __metadata("design:paramtypes", [change_password_service_1.ChangePasswordService])
], ChangePasswordController);
exports.ChangePasswordController = ChangePasswordController;
//# sourceMappingURL=change-password.controller.js.map