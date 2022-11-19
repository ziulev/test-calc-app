export interface ButtonConfig {
  label?: string,
  onPress?: () => void,
  isDisabled?: () => boolean,
}

export enum OperationType {
  plus = '+',
  minus = '-',
  times  = '*',
  divide = '/',
}
