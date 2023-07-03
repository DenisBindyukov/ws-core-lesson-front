import {Injectable} from '@nestjs/common';
import {SocketParticipantService} from "./modules/participant/socket-participant.service";

@Injectable()
export class AppService {
    constructor(
        private readonly participantService: SocketParticipantService
    ) {
    }

    getHello(): string {
        return 'Hello World!';
    }

    validateParticipants(dto: { participantId: string, status: string }) {
        this.participantService.authenticationParticipant(dto)
        return
    }

    sendStatusQuiz(dto: {
        conferenceId: string,
        status: boolean
    }) {
        this.participantService.sendStatusQuiz(dto)
        return
    }
}
