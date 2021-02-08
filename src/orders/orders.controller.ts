import { Controller, Get} from '@nestjs/common'

@Controller('orders')
export class OrdersController {


    @Get()
    async findAll(): Promise<string>{

        return 'This action return all orders';
    }

}