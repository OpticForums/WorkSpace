import { UserDto } from './user.dto';
declare const UserProfileDto_base: import("@nestjs/common").Type<Omit<UserDto, "password">>;
export declare class UserProfileDto extends UserProfileDto_base {
}
export {};
