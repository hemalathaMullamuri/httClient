import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class Configservice {
  configUrl = 'assets/config.json';
  constructor(private http: HttpClient) {

  }
  getConfig() {
    return this.http.get(this.configUrl);
  }
}

