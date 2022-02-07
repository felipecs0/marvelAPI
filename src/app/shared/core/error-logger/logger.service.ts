import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class Logger {
  constructor(private toastr: ToastrService){}

  error(message: string, data: any, title?: string) {
    this.toastr.error(message, title);
    console.error(`Error: ${message}`, data);
  }

  info(message: string, data: any, title: string) {
    this.toastr.info(message, title);
    console.log(`Info: ${message}`, data);
  }

  success(message: string, data: any, title: string) {
    this.toastr.success(message, title);
    console.log(`Success: ${message}`, data);
  }

  warning(message: string, data: any, title: string) {
    this.toastr.warning(message, title);
    console.warn(`Warning: ${message}`, data);
  }
}
