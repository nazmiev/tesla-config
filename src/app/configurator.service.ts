import { inject, Injectable, signal } from '@angular/core';
import { CarModel, CarOptions } from './models.type';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfiguratorService {
  private http = inject(HttpClient);
  public confSelected = signal(false);
  public selectedModel = signal<CarModel | undefined>(undefined);

  public allModels() {
    return this.http.get<CarModel[]>('models').pipe(delay(1000));
  }

  public carOptions(carCode: string) {
    return this.http.get<CarOptions>(`options/${carCode}`).pipe(delay(500));
  }
}
