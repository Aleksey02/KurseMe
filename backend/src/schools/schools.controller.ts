import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { extname } from 'path';
import { diskStorage } from 'multer';

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('imageUrl',{
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const extension = extname(file.originalname);
          cb(null, `${uniqueSuffix}${extension}`);
        }
      })
    }))
  create(@Body() createSchoolDto: CreateSchoolDto, @UploadedFile() image: Express.Multer.File) {
    return this.schoolsService.create({
      ...createSchoolDto,
      imageUrl: image.filename,
    });
  }

  @Get()
  findAllSchools() {
    return this.schoolsService.findAllSchools();
  }

  @Get(':grade')
  findSchoolsByGrade(@Param() params: any) {
    return this.schoolsService.findSchoolsByGrade(params.grade);
  }

  @Get('/school/:id')
  findOne(@Param('id') id: string) {
    return this.schoolsService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('imageUrl',{
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const extension = extname(file.originalname);
          cb(null, `${uniqueSuffix}${extension}`);
        }
      })
    }))
  update(@Param('id') id: string, @Body() updateSchoolDto: UpdateSchoolDto, @UploadedFile() image?: Express.Multer.File) {
    return this.schoolsService.update(+id, updateSchoolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolsService.remove(+id);
  }
}
