import { Component, EventEmitter, Output } from '@angular/core';
import { LogginService } from 'app/logging.services';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  // providers: [LogginService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New status: ' + status)
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
/*     this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    }); */
    this.accountsService.addAcount(accountName, accountStatus);
   // this.logginService.logStatusChange(accountStatus);
  }
}
