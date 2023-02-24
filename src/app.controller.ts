import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    constructor() { }

    @Get('salam')
    getSomething(): string {
        return "Yes you get something";
    }
}