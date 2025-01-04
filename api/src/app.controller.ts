/**
 * @packageDocumentation
 * @category Controller
 */

//#region imports
import { Controller, Get } from '@nestjs/common';
import { AppService } from 'Entain/app.service';
import { getSwaggerJsonString } from 'Entain/config/swagger';
//#endregion

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/')
  status(): string {
    return this.appService.status();
  }

  @Get('/swagger-config')
  getSwaggerConfig(): string {
    return getSwaggerJsonString();
  }
}
