import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { WorkPlace } from '@prisma/client';
import { WorkPlaceDto } from './workplace.dto';

@Injectable()
export class MeService {

  constructor(private prisma: PrismaService) {}

  pageSize = 5;

  async getWorkplaces(page: number): Promise<WorkPlace[]> {
    if (!page || page < 0) {
      console.log('something went wrong:', page);
      return this.prisma.workPlace.findMany();
    } else {
      const skip = page * this.pageSize;
      const take = this.pageSize;
      console.log('page:', page, 'skip:', skip, 'take:', take);
      return this.prisma.workPlace.findMany({
        skip: skip,
        take: take
      });
    }
  }

  async addWorkplace(workplace: WorkPlaceDto) {
    console.log('sent:', workplace);
    this.prisma.workPlace
      .create({ data: workplace })
      .then((newWorkplace) => console.log('created:', newWorkplace));
  }

  async deleteWorkplace(name: string) {
    console.log('deleting:', name);
    this.prisma.workPlace
      .findFirst({
        where: { name: name },
      })
      .then((workplace) => {
        console.log('for delete:', workplace);
        return workplace;
      })
      .then((workplace) => {
        if (workplace != null) {
          this.prisma.workPlace
            .delete({ where: { id: workplace.id } })
            .then((workplace) => console.log('deleted:', workplace));
        }
      });
  }
}
