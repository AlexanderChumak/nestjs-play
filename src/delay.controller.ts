import { Controller, Get, Query} from '@nestjs/common'

@Controller('delay')
export class DelayController {


    @Get()
    async findAllWithDelay(@Query('ms') delay_ms): Promise<string>{

        delay_ms = delay_ms ? parseInt(delay_ms) : 0;

        if(isNaN(delay_ms))
        {
            delay_ms = 0;
        }

        const delay = (timeout) => new Promise((resolve) => {
            console.log('Delay: ' + timeout);
            setTimeout(resolve, timeout);
        });

        await delay(delay_ms);

        return 'Delay: ' + delay_ms + 'ms';
    }
}