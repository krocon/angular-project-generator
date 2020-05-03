import { ButtonData } from './button.data';
import { InputData } from './input.data';


export class ConfirmationData {

  public inputModel = {};

  constructor(public title: string,
              public phrases: Array<string>,
              public buttons: Array<ButtonData>,
              public width = '500px',
              public height = '',
              public vertical = false,
              public inputs: InputData[] = null,
              public cssClass = ''
  ) {
    if (inputs) {
      for (const input of inputs) {
        this.inputModel[input.key] = input.inputValue;
      }
    }
  }
}
