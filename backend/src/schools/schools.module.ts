import { Module } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { SchoolsController } from './schools.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { School } from './entities/school.entity';
import { SubjectsModule } from 'src/subjects/subjects.module';

@Module({
  imports: [TypeOrmModule.forFeature([School]), SubjectsModule],
  controllers: [SchoolsController],
  providers: [SchoolsService],
})
export class SchoolsModule {}
