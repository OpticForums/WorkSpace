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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const passport_1 = require("@nestjs/passport");
const user_profile_dto_1 = require("./dto/user-profile.dto");
const user_update_dto_1 = require("./dto/user-update.dto");
const swagger_1 = require("@nestjs/swagger");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async findAllUser() {
        return this.usersService.findAll();
    }
    async findOneUser(userId) {
        return this.usersService.findById(userId);
    }
    async getUser(res, userId) {
        const user = await this.usersService.findById(userId);
        if (!user) {
            throw new common_1.NotFoundException('User does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            user: user,
            status: 200,
        });
    }
    async updateProfileUser(res, userId, userProfileDto) {
        try {
            await this.usersService.updateProfileUser(userId, userProfileDto);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'User Updated successfully!',
                status: 200,
            });
        }
        catch (err) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Error: User not updated!',
                status: 400,
            });
        }
    }
    async updateUser(res, userId, userUpdateDto) {
        try {
            await this.usersService.updateUser(userId, userUpdateDto);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'User Updated successfully!',
                status: 200,
            });
        }
        catch (err) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Error: User not updated!',
                status: 400,
            });
        }
    }
    async deleteUser(userId) {
        const user = this.usersService.deleteUser(userId);
        if (!user) {
            throw new common_1.NotFoundException('User does not exist!');
        }
        return user;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAllUser", null);
__decorate([
    (0, common_1.Get)('/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOneUser", null);
__decorate([
    (0, common_1.Get)('/:userId/profile'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, common_1.Put)('/:userId/profile'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('userId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, user_profile_dto_1.UserProfileDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateProfileUser", null);
__decorate([
    (0, common_1.Put)('/:userId'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('userId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, user_update_dto_1.UserUpdateDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)('/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map