import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogginService } from 'app/logging.services';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
 // providers: [LogginService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
 // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private accountsService: AccountsService) {}


  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
   // this.statusChanged.emit({id: this.id, newStatus: status});
   //   this.logginService.logStatusChange(status);
   this.accountsService.statusUpdated.emit(status);
  }
}
