import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  showLayout: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
