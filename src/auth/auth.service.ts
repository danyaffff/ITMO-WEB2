import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  private salt = 12;

  constructor(private prisma: PrismaService) {}

  async users() {
    return await this.prisma.user.findMany();
  }

  async login(email: string) {
    return await this.prisma.user.findFirst({ where: { email: email } });
  }

  async register(email: string, password: string) {
    return this.prisma.user
      .create({
        data: {
          email: email,
          password: await bcrypt.hash(password, this.salt),
          role: email == 'danya240926@gmail.com' ? 'admin' : 'public'
        }
      })
  }

  async delete(id: number) {
    return await this.prisma.user.delete({ where: { id: id } })
  }
}
