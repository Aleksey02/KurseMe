import { School } from 'src/schools/entities/school.entity';
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SchoolsService {
  constructor(
    @InjectRepository(School)
    private readonly schoolsRepository: Repository<School>,
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
    return this.schoolsRepository.delete(id);
  }
}
