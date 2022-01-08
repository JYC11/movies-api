import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number): Movie {
    return this.moviesService.getOne(id);
  }

  @Post('create')
  create(@Body() data: CreateMovieDTO) {
    return this.moviesService.create(data);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number): boolean {
    return this.moviesService.deleteOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: number, @Body() data: UpdateMovieDTO) {
    return this.moviesService.update(id, data);
  }
}
