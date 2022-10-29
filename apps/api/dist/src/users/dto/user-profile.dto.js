"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("./user.dto");
class UserProfileDto extends (0, swagger_1.OmitType)(user_dto_1.UserDto, ['password']) {
}
exports.UserProfileDto = UserProfileDto;
//# sourceMappingURL=user-profile.dto.js.map