"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("./user.dto");
class UserUpdateDto extends (0, swagger_1.PartialType)(user_dto_1.UserDto) {
}
exports.UserUpdateDto = UserUpdateDto;
//# sourceMappingURL=user-update.dto.js.map