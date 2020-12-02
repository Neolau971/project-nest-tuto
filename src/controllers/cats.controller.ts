import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Cat } from 'src/interface/cat.interface';
import { CatsService } from 'src/services/cats.service';
import { CreateCatDto } from '../dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('/cat/:elementid')
  findOne(@Param('elementid') elementid: string): string {
    return `This action returns a ${elementid} cat`;
  }
}
