import {Body, Controller, Get, HttpCode, Post} from '@nestjs/common';
import {AppService} from './app.service';
import * as HTTP from "http";

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService
    ) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Post('validate-participants')
    @HttpCode(200)
    validateParticipants(@Body() dto: { participantId: string, status: string }) {
       this.appService.validateParticipants(dto)
        return true
    }

    @Post('quiz-management')
    @HttpCode(200)
    sendStatus(@Body() dto: {
        conferenceId: string,
        status: boolean
    }) {
        this.appService.sendStatusQuiz(dto)
        return true
    }
}
