import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<h1 style="color: #000; text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #0fa,
    0 0 82px #0fa,
    0 0 92px #0fa,
    0 0 102px #0fa,
    0 0 151px #0fa; font-size: 4.2rem;  text-align: center;
    font-weight: 400;" >The back-end of TalksApp is online!</h1>`;
  }
}
