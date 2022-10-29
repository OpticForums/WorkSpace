import { UserDto } from '../../users/dto/user.dto';
declare const LoginDto_base: import("@nestjs/common").Type<Pick<UserDto, "password" | "email">>;
export declare class LoginDto extends LoginDto_base {
}
export {};
