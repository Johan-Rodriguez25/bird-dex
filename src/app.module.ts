import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BirdsModule } from './birds/birds.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BirdsModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
