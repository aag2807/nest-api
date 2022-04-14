/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTrailerDTO } from '../../common/DTO/CreateTrailerDTO';
import { UpdateTrailerDTO } from '../../common/DTO/UpdateTrailerDTO';
import { Trailer } from '../../common/entities/trailer.entity';
import { TrailerService } from '../../services/trailer/trailer.service';

@ApiTags('Trailers')
@Controller('trailer')
export class TrailerController {
  constructor(private trailerService: TrailerService) {}

  @Get('get-all')
  async getAll() {
    const trailers = await this.trailerService.findAll();
    return await Promise.all(trailers);
  }

  @Get('get-by-id/:id')
  async getById(@Param('id') id: string): Promise<Trailer> {
    return await this.trailerService.findOne(id);
  }

  @Post('create')
  async create(@Body() trailer: CreateTrailerDTO) {
    await this.trailerService.create(trailer);
  }

  @Patch('update/:id')
  async update(
    @Param('id') id: string,
    @Body() trailer: UpdateTrailerDTO,
  ): Promise<void> {
    await this.trailerService.update(id, trailer);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.trailerService.delete(id);
  }
}
