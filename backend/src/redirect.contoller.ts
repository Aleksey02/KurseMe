import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { BotLinkService } from './bot-link/bot-link.service';

@Controller()
export class RedirectController {
  constructor(private readonly botLinkService: BotLinkService) {}

  @Get(':id')
  async redirectToTelegram(@Param('id') id: string, @Res() res: Response) {
    const botName = await this.botLinkService.getLink('base');
	console.log('redirect');
	console.log(id, 'id');
	console.log(res, 'res');
	console.log(botName, 'botName');
	
    if (!botName) {
      return res.status(404).send('Not found');
    }

    const telegramUrl = `https://t.me/${botName}?start=${id}`;
    return res.redirect(302, telegramUrl);
  }
}
