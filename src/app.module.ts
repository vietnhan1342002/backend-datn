import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '@/modules/users/users.module';
import { PatientsModule } from '@/modules/patients/patients.module';
import { AppointmentsModule } from '@/modules/appointments/appointments.module';
import { MedicalRecordModule } from '@/modules/medical-record/medical-record.module';
import { BillingModule } from '@/modules/billing/billing.module';
import { InventoryModule } from '@/modules/inventory/inventory.module';
import { InventoryTransactionsModule } from '@/modules/inventory_transactions/inventory_transactions.module';
import { ChairsModule } from './modules/chairs/chairs.module';
import { SchedulesModule } from './modules/schedules/schedules.module';
import { ServicesModule } from './modules/services/services.module';
import { PrescriptionsModule } from './modules/prescriptions/prescriptions.module';
import { PromotionsModule } from './modules/promotions/promotions.module';
import { ReportsModule } from './modules/reports/reports.module';
import { ChairAssignmentsModule } from './modules/chair-assignments/chair-assignments.module';
import { RolesModule } from './modules/roles/roles.module';
import { ClinicsModule } from './modules/clinics/clinics.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { DepartmentsModule } from './modules/departments/departments.module';


@Module({
  imports: [
    UsersModule,
    PatientsModule,
    AppointmentsModule,
    MedicalRecordModule,
    BillingModule,
    InventoryModule,
    InventoryTransactionsModule,
    ChairsModule,
    ChairAssignmentsModule,
    SchedulesModule,
    ServicesModule,
    PrescriptionsModule,
    PromotionsModule,
    ReportsModule,
    RolesModule,
    ClinicsModule,
    NotificationsModule,
    DepartmentsModule,

    ConfigModule.forRoot({ isGlobal: true }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
