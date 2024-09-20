import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { Inventory, InventorySchema } from './schemas/inventory.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Inventory.name, schema: InventorySchema }])],
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}
