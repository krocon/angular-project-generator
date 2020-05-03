import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from "@angular/material/progress-spinner";
import { ProgressBarMode } from "@angular/material/progress-bar";

@Component({
  selector: 'app-__cp__-forms-demo',
  templateUrl: './__cp__-forms-demo.component.html',
  styleUrls: ['./__cp__-forms-demo.component.scss']
})
export class __capcp__FormsDemoComponent {

  selected = 'option2';
  checked = true;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  color: ThemePalette = 'accent';

  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  step = 0;
  bufferValue = 75;
  barmode: ProgressBarMode = 'determinate';

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
