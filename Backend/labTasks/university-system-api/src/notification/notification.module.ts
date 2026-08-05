import { Module, forwardRef } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { EnrolementModule } from 'src/enrolement/enrolement.module';

@Module({
  imports: [forwardRef(() => EnrolementModule) ],
  controllers: [NotificationController],
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule {}
