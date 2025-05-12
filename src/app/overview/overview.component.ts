import { ConfiguratorService } from '../configurator.service';
import { Component, inject, OnInit } from '@angular/core';
import { CarModel, Config } from '../models.type';

@Component({
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
  selector: 'app-overview',
  standalone: true,
  imports: [],
})
export class OverviewComponent implements OnInit {
  modelsWithOptions: (CarModel & { configs: Config[] })[] = [];
  configuratorService = inject(ConfiguratorService);
  loading = true;

  ngOnInit() {
    this.configuratorService.allModels().subscribe((models) => {
      let completedRequests = 0;
      models.forEach((model) => {
        this.configuratorService.carOptions(model.code).subscribe((carOptions) => {
          this.modelsWithOptions.push({
            ...model,
            configs: carOptions.configs,
          });
          completedRequests++;
          if (completedRequests === models.length) {
            this.loading = false;
          }
        });
      });
    });
  }
}
