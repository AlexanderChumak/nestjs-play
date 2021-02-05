import { Controller, Get} from '@nestjs/common'

@Controller('cats')
export class CatsController {


    @Get()
    async findAll(): Promise<string>{

        return 'This action return all cats (fast)';
    }

    @Get('delay')
    async findAllWithDelay(): Promise<string>{


        const delay = (timeout) => new Promise((resolve) => {
            console.log('Delay' + timeout);
            setTimeout(resolve, timeout);
        });

        const delay_ms = 500;
        await delay(delay_ms);

        return 'This action return all cats. Delay = ' + delay_ms;
    }
}