import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UpdateSchoolDto } from 'src/schools/dto/update-school.dto';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

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
  create(@Body() createSubjectDto: CreateSubjectDto, @UploadedFile() image: Express.Multer.File) {
    console.log(createSubjectDto, image.filename);
    
    return this.subjectsService.create({
      ...createSubjectDto,
      imageUrl: image.filename,
    });
  }

  @Get()
  findAll() {
    return this.subjectsService.findAll();
  }

  @Get(':idSchool')
  findBySchool(@Param('idSchool') idSchool: string) {
    return this.subjectsService.findBySchool(+idSchool);
  }

  @Get(':idSchool/:id')
  findOne(@Param('id') id: string) {
    return this.subjectsService.findOne(+id);
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
  update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto, @UploadedFile() image?: Express.Multer.File) {
    return this.subjectsService.update(+id, {
      ...updateSubjectDto,
      imageUrl: image?.filename
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectsService.remove(+id);
  }
}
