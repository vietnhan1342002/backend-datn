import { Module } from '@nestjs/common';
import { InventoryTransactionsService } from './inventory_transactions.service';
import { InventoryTransactionsController } from './inventory_transactions.controller';
import { InventoryTransactions, InventoryTransactionsSchema } from './schemas/inventory_transaction.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: InventoryTransactions.name, schema: InventoryTransactionsSchema }])],

  controllers: [InventoryTransactionsController],
  providers: [InventoryTransactionsService],
})
export class InventoryTransactionsModule { }
