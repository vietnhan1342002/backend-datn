import { Module } from '@nestjs/common';
import { BillingService } from './billing.service';
import { BillingController } from './billing.controller';
import { Billing, BillingSchema } from './schemas/billing.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Billing.name, schema: BillingSchema }])],

  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
