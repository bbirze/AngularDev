import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(artifact: string, msg: string) {
    console.log(`${artifact} : ${msg}`);
  }
}
