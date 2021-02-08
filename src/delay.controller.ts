import { Controller, Get, Query} from '@nestjs/common'

@Controller('delay')
export class DelayController {


    @Get()
    async findAllWithDelay(@Query('ms') delay_ms:500): Promise<string>{


        const delay = (timeout) => new Promise((resolve) => {
            console.log('Delay' + timeout);
            setTimeout(resolve, timeout);
        });

        await delay(delay_ms);

        return 'Delay = ' + delay_ms;
    }
}