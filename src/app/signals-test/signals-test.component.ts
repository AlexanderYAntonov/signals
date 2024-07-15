import { Component, Signal, WritableSignal, computed, effect, signal, untracked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignalsTestChildComponent } from "../signals-test-child/signals-test-child.component";

@Component({
  selector: 'app-signals-test',
  standalone: true,
  imports: [FormsModule, SignalsTestChildComponent],
  templateUrl: './signals-test.component.html',
  styleUrl: './signals-test.component.css'
})
export class SignalsTestComponent{
  public wrSignalA: WritableSignal<number> = signal(0);

  public wrSignalB: WritableSignal<number> = signal(0);

  public cmSignal: Signal<number> = computed(() => this.wrSignalA() * this.wrSignalB());

  public valueA: number = 0;

  public valueB: number = 0;

  public valueEffect = effect(() => {
    console.log(`Has values for signals ${this.wrSignalA()} and ${untracked(this.wrSignalB)}`);
  });

  public updateSignal(): void {
    this.wrSignalA.set(this.valueA);
    this.wrSignalB.set(this.valueB);
  }
}
