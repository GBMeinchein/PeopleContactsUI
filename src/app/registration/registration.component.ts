import { Component, OnInit } from "@angular/core";
import { Registration } from '../models/registration';
import { Service } from '../service/service';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
  providers: [Service]
})
export class RegistrationComponent implements OnInit {
    registrations: Registration[];
    contactModel: Contact;
    regModel: Registration;
    showNew: Boolean = false;
    showNewContact: Boolean = false;
    submitType: string = "Save";
    submitTypeContact: string = "Save";
    selectedRow: number;
    selectedRowContact: number;
    companies: string[] = ["Company A", "Company B", "Company C", "Company D", "Company E"];
  constructor(private service: Service) {
    this.getPeople();
  }

getPeople(): void {
  this.service.getPeople()
    .subscribe(people => (this.registrations = people));
}

onNew() {
  this.regModel = new Registration();
  this.submitType = 'Save';
  this.showNew = true;
  }

onNewContact() {
  this.contactModel = new Contact();
  this.submitTypeContact = 'Save';
  this.showNewContact = true;
  }

onSaveContact() {
  if (this.submitTypeContact === 'Save') {
    this.regModel.contacts.push(this.contactModel);
  } else {
  this.regModel.contacts[this.selectedRowContact] = this.contactModel;
}
  this.showNewContact = false;  
}

onSave() {
  if (this.submitType === 'Save') {
    this.service
      .addPerson(this.regModel)
      .subscribe(person => this.registrations.push(person));
  } else {
  
  this.service
  .updatePerson(this.regModel)
  .subscribe(person => this.registrations[this.selectedRow] = person);
}
this.getPeople();
  this.showNew = false;
  
}

onEdit(index: number) {
  this.selectedRow = index;
  this.regModel = new Registration();
  // Retrieve selected 
  this.regModel = Object.assign({}, this.registrations[this.selectedRow]);

  this.service.getPerson(this.regModel.id)
  .subscribe(people => (this.regModel = people));

  this.submitType = 'Update';
  this.showNew = true;
  
}

onDelete(index: number) {
  this.service
  .deletePerson(this.registrations[index].id)
  .subscribe();
  this.registrations.splice(index);
}

onDeleteContact(index: number) {
  this.regModel.contacts.splice(index);
}

onCancel() {
  this.showNew = false;
  this.showNewContact = false;
}

onCancelContact(){
  this.showNewContact = false;
}

onChangeCompany(company: string) {
  //this.regModel.company = company;
}
  ngOnInit() {
    
  }
}


