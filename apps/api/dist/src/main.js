"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const configure_swagger_docs_helper_1 = require("./helpers/configure-swagger-docs.helper");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    (0, configure_swagger_docs_helper_1.configureSwaggerDocs)(app, configService);
    app.enableCors({
        origin: configService.get('ENDPOINT_CORS'),
        credentials: true,
    });
    const port = configService.get('NODE_API_PORT') || 3000;
    await app.listen(port);
    common_1.Logger.log(`Url for OpenApi: ${await app.getUrl()}/docs`, 'Swagger');
}
bootstrap();
//# sourceMappingURL=main.js.map