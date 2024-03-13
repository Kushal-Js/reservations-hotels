import { Module } from '@nestjs/common';
import { HealthModule, LoggerModule, AUTH_SERVICE } from '@app/common';
import { DatabaseModule } from '@app/common';
import { HotelsController } from './hotels.controller';
import { HotelsService } from './hotels.service';
import { HotelsRepository } from './hotels.repository';
// import Joi from 'joi';
import { HotelDocument, HotelSchema } from './schemas/hotels.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    LoggerModule,
    HealthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: HotelDocument.name, schema: HotelSchema },
    ]),
    ClientsModule.registerAsync([
      {
        name: AUTH_SERVICE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('AUTH_HOST'),
            port: configService.get('AUTH_TCP_PORT'),
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [HotelsController],
  providers: [HotelsService, HotelsRepository],
  exports: [HotelsService, HotelsRepository],
})
export class HotelsModule {}
