/**
 * @packageDocumentation
 * @category Test
 */

//#region imports
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from 'Entain/app.controller';
import { AppService } from 'Entain/app.service';
//#endregion

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Data server is active!"', () => {
      expect(appController.status()).toBe('Data server is active!');
    });
  });
});
