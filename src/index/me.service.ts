import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { WorkPlace } from '@prisma/client';
import { WorkPlaceDto } from './workplace.dto';

@Injectable()
export class MeService {
  constructor(private prisma: PrismaService) {}
  async getWorkplaces(): Promise<WorkPlace[]> {
    return this.prisma.workPlace.findMany();
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
