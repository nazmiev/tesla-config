import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ConfiguratorService } from './configurator.service';

@Injectable({
    providedIn: 'root',
})
export class Step2Guard implements CanActivate {
    constructor(
        private router: Router,
        private service: ConfiguratorService
    ) { }

    canActivate(): boolean {
        if (this.service.confSelected()) {
            return true; // Allow navigation
        } else {
            this.router.navigate(['/step1']); // Redirect to step1
            return false; // Prevent navigation
        }
    }
}