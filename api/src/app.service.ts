/**
 * @packageDocumentation
 * @category Service
 */

//#region imports
import { Injectable, Logger, OnApplicationShutdown } from '@nestjs/common';
//#endregion

@Injectable()
export class AppService implements OnApplicationShutdown {
  private readonly logger = new Logger(AppService.name);

  onApplicationShutdown(signal: string) {
    this.logger.warn('SIGTERM: ', signal);
    // TODO: Perform cleanup
  }

  status(): string {
    return 'Data server is active!';
  }
}
