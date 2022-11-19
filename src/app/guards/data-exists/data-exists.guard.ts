import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StateService } from 'src/app/services/state/state.service';

@Injectable({
  providedIn: 'root'
})
export class DataExistsGuard implements CanActivate {

  constructor(
    private stateService: StateService,
    private router: Router,
  ) {}
  canActivate() {
    if (!this.stateService.storedValues.length) {
      return this.router.navigateByUrl('/');
    }

    return true;
  }

}
