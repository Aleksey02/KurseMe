import { School } from 'src/schools/entities/school.entity';
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { join } from 'path';
import { unlink } from 'fs/promises';
import { SubjectsService } from 'src/subjects/subjects.service';

@Injectable()
export class SchoolsService {
  constructor(
    @InjectRepository(School)
    private readonly schoolsRepository: Repository<School>,
    private readonly subjectsService: SubjectsService
  ) {}

  async create(createSchoolDto: CreateSchoolDto) {
    try {
      const newSchool = this.schoolsRepository.create(createSchoolDto);
      const savedSchool = await this.schoolsRepository.save(newSchool);

      return savedSchool;
    } catch (error) {
      console.error('Error creating school:', error);
      throw new InternalServerErrorException('Failed to create school');
    }
  }

  async findAllSchools() {
    return await this.schoolsRepository.find();
  }

  async findSchoolsByGrade(grade) {
    const schools = await this.schoolsRepository.findBy({ grade });
    return schools;
  }

  async findOne(id: number) {
    const school = await this.schoolsRepository.findOneBy({ id });
    return school;
  }

  async update(id: number, updateSchoolDto: UpdateSchoolDto) {
    try {
      console.log('DTO:', updateSchoolDto);
      await this.schoolsRepository.update(id, updateSchoolDto);
      const updatedSchool = await this.schoolsRepository.findOne({ where: { id } });
  
      if (!updatedSchool) {
        throw new NotFoundException(`School with ID ${id} not found`);
      }
  
      console.log('Updated School:', updatedSchool);
      return updatedSchool;
    } catch (error) {
      console.error('Error updating school:', error);
      throw new InternalServerErrorException('Failed to update school');
    }
  }

  remove(id: number) {
    this.deleteImg(id);
    this.subjectsService.deleteImagesForSchool(id);
    return this.schoolsRepository.delete(id);
  }

  async deleteImg(id: number) {
      const school = await this.schoolsRepository.findOne({ where: { id } });
  
      if (school && school.imageUrl) {
        const filePath = join(__dirname, '..', '..', 'uploads', school.imageUrl);
    
        try {
          await unlink(filePath);
          console.log(`Фото ${school.imageUrl} удалено`);
        } catch (err) {
          console.error(`Ошибка при удалении файла: ${err.message}`);
        }
      }
    }
}
