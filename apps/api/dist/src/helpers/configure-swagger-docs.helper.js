"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureSwaggerDocs = void 0;
const swagger_1 = require("@nestjs/swagger");
const basicAuth = require("express-basic-auth");
const SWAGGER_ENVS = ['local', 'dev', 'staging'];
function configureSwaggerDocs(app, configService) {
    if (SWAGGER_ENVS.includes(configService.get('NODE_ENV'))) {
        app.use(['/docs', '/docs-json', '/docs-yaml'], basicAuth({
            challenge: true,
            users: {
                [configService.get('SWAGGER_USER')]: configService.get('SWAGGER_PASSWORD'),
            },
        }));
        const config = new swagger_1.DocumentBuilder()
            .setTitle('API')
            .setDescription('The API description')
            .setVersion('1.0')
            .addBearerAuth()
            .addTag('auth')
            .addTag('users')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('/docs', app, document);
    }
}
exports.configureSwaggerDocs = configureSwaggerDocs;
//# sourceMappingURL=configure-swagger-docs.helper.js.map