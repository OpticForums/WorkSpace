"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("../../users/dto/user.dto");
class LoginDto extends (0, swagger_1.PickType)(user_dto_1.UserDto, [
    'email',
    'password',
]) {
}
exports.LoginDto = LoginDto;
//# sourceMappingURL=login.dto.js.map