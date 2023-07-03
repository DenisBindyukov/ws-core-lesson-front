import { Module } from '@nestjs/common';
import {SocketParticipantService} from "./socket-participant.service";

@Module({
    imports: [],
    controllers: [],
    providers: [SocketParticipantService],
})
export class SocketParticipantModule {}
