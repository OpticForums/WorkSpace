import { UserDto } from '../../users/dto/user.dto';
declare const ChangePasswordDto_base: import("@nestjs/common").Type<Pick<UserDto, "password" | "email">>;
export declare class ChangePasswordDto extends ChangePasswordDto_base {
}
export {};
