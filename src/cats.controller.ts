import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return createCatDto;
  }

  @Get()
  async findAll(): Promise<any[]> {
    return ['dosifhdsf'];
  }

  @Get('/cat/:elementid')
  findOne(@Param('elementid') elementid: string): string {
    return `This action returns a ${elementid} cat`;
  }
}
