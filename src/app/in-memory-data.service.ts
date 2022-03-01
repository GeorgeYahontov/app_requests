import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    let items = [
      { id: 11, name: 'Windstorm' },
      { id: 12, name: 'Bombasto' },
      { id: 13, name: 'Magneta' },
      { id: 14, name: 'Tornado' },
      { id: 15, name: 'Rindstorm' },
      { id: 16, name: 'Gombasto' },
      { id: 17, name: 'Fagneta' },
      { id: 18, name: 'Hado' },
      { id: 19, name: 'Wind' },
      { id: 20, name: 'Pomasto' },
      { id: 21, name: 'Magneda' },
      { id: 22, name: 'Torgino' },
      { id: 23, name: 'Granada' },
      { id: 24, name: 'Tokaido' },
      { id: 25, name: 'Winston' },
      { id: 26, name: 'Saplo' }
    ];
    return {items};
  }
}
