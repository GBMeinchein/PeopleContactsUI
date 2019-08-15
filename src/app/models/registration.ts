import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Contact } from './contact';

export class Registration {
    constructor(
      public id: number = 0,
      public nome: string = "",
      public contacts: Contact[] = []
    ) {}
  }

