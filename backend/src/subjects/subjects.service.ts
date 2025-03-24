import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';
import { Repository } from 'typeorm';
import { join } from 'path';
import { unlink } from 'fs/promises';

@Injectable()
export class SubjectsService {
    constructor(
      @InjectRepository(Subject)
      private readonly subjectRepository: Repository<Subject>,
    ) {}

  async create(createSubjectDto: CreateSubjectDto) {
    try {
      const newSubject = this.subjectRepository.create(createSubjectDto);
      const savedSubject = await this.subjectRepository.save(newSubject);

      return savedSubject;
    } catch (error) {
      console.error('Error creating subject:', error);
      throw new InternalServerErrorException('Failed to create subject');
    }
  }

  findAll() {
    return `This action returns all subjects`;
  }

  findBySchool(idSchool: number) {
    return this.subjectRepository.find({
      where: {school: {id: idSchool}}
    });
  }

  findOne(id: number) {
    return this.subjectRepository.findOneBy({ id });
  }

  async update(id: number, updateSubjectDto: UpdateSubjectDto) {
    try {
      console.log('DTO:', updateSubjectDto);
      await this.subjectRepository.update(id, updateSubjectDto);
      const updatedSubject = await this.subjectRepository.findOne({ where: { id } });
  
      if (!updatedSubject) {
        throw new NotFoundException(`Subject with ID ${id} not found`);
      }
  
      console.log('Updated Subject:', updatedSubject);
      return updatedSubject;
    } catch (error) {
      console.error('Error updating subject:', error);
      throw new InternalServerErrorException('Failed to update subject');
    }
  }

  remove(id: number) {
    this.deleteImg(id);
    this.subjectRepository.delete(id);
  }

  async deleteImagesForSchool(idSchool: number) {
    const subjects = await this.subjectRepository.find({ where: { school: { id: idSchool } } });
    subjects.forEach(async (subject) => {
      this.deleteImg(subject.id);
    })
  }

  async deleteImg(id: number) {
    const subject = await this.subjectRepository.findOne({ where: { id } });

    if (subject && subject.imageUrl) {
      const filePath = join(__dirname, '..', '..', 'uploads', subject.imageUrl);
  
      try {
        await unlink(filePath); // Удаляем файл
        console.log(`Фото ${subject.imageUrl} удалено`);
      } catch (err) {
        console.error(`Ошибка при удалении файла: ${err.message}`);
      }
    }
  }
}
