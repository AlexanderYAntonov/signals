import { Component, OnInit, Signal, WritableSignal, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals-test',
  standalone: true,
  imports: [],
  templateUrl: './signals-test.component.html',
  styleUrl: './signals-test.component.css'
})
export class SignalsTestComponent implements OnInit{
  public wrSignal: WritableSignal<number> = signal(0);

  public cmSignal: Signal<number> = computed(() => this.wrSignal()*2);

  ngOnInit(): void {
    this.wrSignal.set(10);
  }
}
