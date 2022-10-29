"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const login_module_1 = require("./login/login.module");
const register_module_1 = require("./register/register.module");
const users_module_1 = require("./users/users.module");
const forgot_password_module_1 = require("./forgot-password/forgot-password.module");
const change_password_module_1 = require("./change-password/change-password.module");
const mailer_module_1 = require("./mailer/mailer.module");
const throttler_1 = require("@nestjs/throttler");
const utils_module_1 = require("./utils/utils.module");
const Yup = require("yup");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env', '.env.dev', '.env.stage', '.env.prod'],
                validationSchema: Yup.object({
                    TYPEORM_HOST: Yup.string().required(),
                    TYPEORM_PORT: Yup.number().default(3306),
                    TYPEORM_USERNAME: Yup.string().required(),
                    TYPEORM_PASSWORD: Yup.string().required(),
                    TYPEORM_DATABASE: Yup.string().required(),
                }),
            }),
            throttler_1.ThrottlerModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    ttl: config.get('THROTTLE_TTL'),
                    limit: config.get('THROTTLE_LIMIT'),
                }),
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    type: 'postgres',
                    host: config.get('TYPEORM_HOST'),
                    port: config.get('TYPEORM_PORT'),
                    username: config.get('TYPEORM_USERNAME'),
                    password: config.get('TYPEORM_PASSWORD'),
                    database: config.get('TYPEORM_DATABASE'),
                    synchronize: true,
                    entities: ['dist/**/*.entity.js'],
                    migrations: ['dist/migrations/**/*.js'],
                    subscribers: ['dist/subscriber/**/*.js'],
                    cli: {
                        migrationsDir: config.get('TYPEORM_MIGRATIONS_DIR'),
                        subscribersDir: config.get('TYPEORM_SUBSCRIBERS_DIR'),
                    },
                }),
            }),
            login_module_1.LoginModule,
            register_module_1.RegisterModule,
            users_module_1.UsersModule,
            forgot_password_module_1.ForgotPasswordModule,
            change_password_module_1.ChangePasswordModule,
            mailer_module_1.MailerModule,
            utils_module_1.UtilsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map