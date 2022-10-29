"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("../../users/dto/user.dto");
class ForgotPasswordDto extends (0, swagger_1.PickType)(user_dto_1.UserDto, ['email']) {
}
exports.ForgotPasswordDto = ForgotPasswordDto;
//# sourceMappingURL=forgot-password.dto.js.map