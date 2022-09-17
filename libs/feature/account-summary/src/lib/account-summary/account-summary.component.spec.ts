import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { Account } from 'libs/shared/services/src/lib/account';
import { AccountSummaryComponent } from './account-summary.component';

// TODO: 9. Topics in this file: Angular Unit Testing w/ Jest
describe('AccountSummaryComponent', () => {
  let component: AccountSummaryComponent;
  let fixture: ComponentFixture<AccountSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve accounts', () => {
    expect.assertions(2);
    expect(component.accounts$).toBeTruthy();
    component.accounts$.subscribe(acc => {
      expect(acc.length).toBe(4);
    });
  });

  describe("#filterAccounts", () => {
 
    it('should return filter accounts matching', () => {
      const accounts: Account[] = [ { id: "1234", balance: 7500, currency: "cad" },  { id: "1238", balance: 7500, currency: "usd" },];
      const accountsFilter = "cad";
      const filtered = component.filterAccounts(accounts, accountsFilter);
      expect(filtered).toBe([{ id: "1234", balance: 7500, currency: "cad" }]);
    });
  });
});
