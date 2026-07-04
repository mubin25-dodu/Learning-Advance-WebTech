import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { Notification } from './DTO/NotifiactionDTO';
import { NotificationcheckDTO } from './DTO/NotificationcheckDTO';


@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post("send")
  SendNotification(@Body() notificationDTO: Notification){
    return this.notificationService.sendNotification(notificationDTO);
  }
  @Post("check")
  checkNotification(@Body() notificationCheckDTO: NotificationcheckDTO){
    return this.notificationService.checkNotification(notificationCheckDTO);
  }


}
