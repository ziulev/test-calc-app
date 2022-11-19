import { Component } from '@angular/core';
import { ButtonConfig, OperationType } from '../../interfaces';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-actions-screen',
  templateUrl: './actions-screen.component.html',
  styleUrls: ['./actions-screen.component.scss']
})
export class ActionsScreenComponent {
  buttons: ButtonConfig[] = [
    { label: OperationType.plus, onPress: () => this.stateService.calculate(OperationType.plus) },
    { label: OperationType.minus, onPress: () => this.stateService.calculate(OperationType.minus) },
    { label: OperationType.times, onPress: () => this.stateService.calculate(OperationType.times) },
    { label: OperationType.divide, onPress: () => this.stateService.calculate(OperationType.divide) },
  ];

  constructor(public stateService: StateService) {}

}
