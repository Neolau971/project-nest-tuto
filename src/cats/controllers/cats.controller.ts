import { Body, Controller, Get, Param, Post, UseFilters } from '@nestjs/common';
import { Cat } from 'src/cats/interface/cat.interface';
import { CatsService } from 'src/cats/services/cats.service';
import { HttpExceptionFilter } from 'src/common/httpException/http-exception.filter';
import { CreateCatDto } from '../dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @UseFilters(HttpExceptionFilter)
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
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
