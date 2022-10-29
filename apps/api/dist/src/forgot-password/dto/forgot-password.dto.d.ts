import { UserDto } from '../../users/dto/user.dto';
declare const ForgotPasswordDto_base: import("@nestjs/common").Type<Pick<UserDto, "email">>;
export declare class ForgotPasswordDto extends ForgotPasswordDto_base {
}
export {};
