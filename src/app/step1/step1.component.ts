import { ConfiguratorService } from '../configurator.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarModel } from '../models.type';

@Component({
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss',
  imports: [FormsModule],
  standalone: true,
})
export class Step1Component implements OnInit {
  service = inject(ConfiguratorService);

  emptyModel: CarModel = { code: '', description: 'Choose model', colors: [] };
  selectedModel: string = this.emptyModel.code;
  models: CarModel[] = [];

  selectedColor: string = '';
  colors: string[] = [];

  getImageUrl(): string {
    return this.selectedModel && this.selectedColor ? `https://interstate21.com/tesla-app/images/${this.selectedModel}/${this.selectedColor}.jpg` : '';
  }

  getColors(): string[] {
    const model = this.models.find((model) => model.code === this.selectedModel);
    return model ? model.colors.map((color) => color.code) : [];
  }

  ngOnInit() {
    this.service.allModels().subscribe((models) => {
      this.models = models;
    });
  }

  onColorChange() {
    this.service.confSelected.set(this.selectedColor !== '');
  }
  
  onModelChange() {
    if (this.selectedModel === '') {
      this.service.confSelected.set(false);
    }
    this.service.selectedModel.set(this.models.find((model) => model.code === this.selectedModel))
  }
}
