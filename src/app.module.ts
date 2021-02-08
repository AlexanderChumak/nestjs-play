import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OrdersController} from './orders/orders.controller';
import { DelayController} from './delay.controller';
import { AppService } from './app.service';


@Module({
  imports: [],
  controllers: [AppController, OrdersController, DelayController],
  providers: [AppService],
})
export class AppModule {}
