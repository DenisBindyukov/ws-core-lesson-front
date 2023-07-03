import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {SocketAdminService} from "./modules/admin/socket-admin.service";
import {SocketParticipantService} from "./modules/participant/socket-participant.service";



@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService, SocketAdminService, SocketParticipantService],
})
export class AppModule {
}
