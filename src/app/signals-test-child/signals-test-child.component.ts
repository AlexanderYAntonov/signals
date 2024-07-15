import { Component, computed, effect, input } from '@angular/core';

@Component({
  selector: 'app-signals-test-child',
  standalone: true,
  imports: [],
  templateUrl: './signals-test-child.component.html',
  styleUrl: './signals-test-child.component.css'
})
export class SignalsTestChildComponent {
  parentValue = input.required<number>({alias: "value"});

  doubleValue = computed(() => this.parentValue()*2);

  constructor() {
    effect(() => {
      console.log("Has parent value: ", this.parentValue());
    });
  }
}
