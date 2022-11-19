import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { OperationType } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  valueSubject = new BehaviorSubject<number>(0);

  storedValues: number[] = [];

  constructor(private router: Router) {}

  appendNumber() {
    this.storedValues.push(this.valueSubject.value);
    this.valueSubject.next(0);
  }

  calculate(operationType: OperationType) {
    const result = this.storedValues.reduce((acc, curr) => {
      switch (operationType) {
        case OperationType.plus:
          acc = curr + acc;
        break;
        case OperationType.minus:
          acc = curr - acc;
        break;
        case OperationType.times:
          acc = curr * acc;
        break;
        case OperationType.divide:
          if (acc === 0) {
            const err = 'Division by zero';
            alert(err);
            throw new Error(err);
          }
          acc = curr / acc;
        break;
      }

      return acc;
    }, 0);

    this.storedValues = [];
    this.valueSubject.next(result);
    this.router.navigate(['/']);
  }

}
