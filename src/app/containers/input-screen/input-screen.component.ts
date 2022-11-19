import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonConfig } from '../../interfaces';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-input-screen',
  templateUrl: './input-screen.component.html',
  styleUrls: ['./input-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputScreenComponent {
  buttons: ButtonConfig[] = [
    { label: '1', onPress: () => this.onNumberPress(1) },
    { label: '2', onPress: () => this.onNumberPress(2) },
    { label: '3', onPress: () => this.onNumberPress(3) },
    { label: '4', onPress: () => this.onNumberPress(4) },
    { label: '5', onPress: () => this.onNumberPress(5) },
    { label: '6', onPress: () => this.onNumberPress(6) },
    { label: '7', onPress: () => this.onNumberPress(7) },
    { label: '8', onPress: () => this.onNumberPress(8) },
    { label: '9', onPress: () => this.onNumberPress(9) },
    { },
    { label: '0', onPress: () => this.onNumberPress(0) },
    { label: 'delete', onPress: () => this.onDeletePress(), isDisabled: () => this.isDeleteDisabled() },
  ];

  constructor(
    public stateService: StateService,
    private router: Router,
  ) {}

  onClickDone() {
    this.stateService.appendNumber();
    this.router.navigate(['/actions']);
  }

  private onDeletePress() {
    const stringValue = this.stateService.valueSubject.value.toString();
    if (stringValue.length < 2) {
      this.stateService.valueSubject.next(0);
      return;
    }

    const nextString = stringValue.substring(0, stringValue.length - 1);

    if (nextString === '-') {
      this.stateService.valueSubject.next(0);
      return;
    }

    const nextValue = parseInt(stringValue.substring(0, stringValue.length - 1));
    this.stateService.valueSubject.next(nextValue);
  }

  private onNumberPress(nextValue: number) {
    const value = this.stateService.valueSubject.value;
    this.stateService.valueSubject.next(value ? parseInt(`${value}${nextValue}`) : nextValue);
  }

  private isDeleteDisabled(): boolean {
    return Boolean(!this.stateService.valueSubject.value);
  }
}
