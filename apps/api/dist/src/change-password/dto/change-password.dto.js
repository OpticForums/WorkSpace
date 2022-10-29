"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePasswordDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("../../users/dto/user.dto");
class ChangePasswordDto extends (0, swagger_1.PickType)(user_dto_1.UserDto, [
    'email',
    'password',
]) {
}
exports.ChangePasswordDto = ChangePasswordDto;
//# sourceMappingURL=change-password.dto.js.map