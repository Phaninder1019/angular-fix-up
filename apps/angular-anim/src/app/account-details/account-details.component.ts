import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Account } from 'libs/shared/services/src/lib/account';
import { AccountService } from 'libs/shared/services/src/lib/account.service';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'angular-anim-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailsComponent  implements OnInit {
  
  constructor(private route: ActivatedRoute, private accountService: AccountService) {
  }
  account : any;
  accounts: Account[] = [];
  ngOnInit() {
    this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });
   this.account = this.accounts.find(i => i.id === this.route.snapshot.paramMap.get('id'));
  }
}
