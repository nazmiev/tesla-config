import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { ConfiguratorService } from '../configurator.service';
import { CarOptions, Config } from '../models.type';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
})
export class Step2Component implements OnInit{
  service = inject(ConfiguratorService);
  carOptions = signal<CarOptions | undefined>(undefined);
  configs = signal<Config[]>([])
  selectedConfigId = 0;
  range = signal(0);
  maxSpeed = signal(0);
  cost = signal(0);

  ngOnInit(): void {
    this.service.carOptions(this.service.selectedModel()?.code ?? '').subscribe((carOptions) => {
      this.carOptions.set(carOptions);
      this.configs.set(carOptions.configs);
    });
  }

  onConfigChange() {
    const selectedConfig = this.configs().find((config) => config.id == this.selectedConfigId);
    if (selectedConfig) {
      this.range.set(selectedConfig.range);
      this.maxSpeed.set(selectedConfig.speed);
      this.cost.set(selectedConfig.price);
    } else {
      this.range.set(0);
      this.maxSpeed.set(0);
      this.cost.set(0);
    }
  }
}
