import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppService} from './app-service';
import {AppInfo} from '../_models';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppInfoService extends AppService {
  readonly resourceName = '/register';

  constructor(private http: HttpClient, private router: Router) {
    super();
  }

  register(payload: AppInfo) {
    // FIXME: Uncomment the HTTP POST once API endpoint is available

    // return this.http.post(this.getEndpoint(this.resourceName), payload);
    return new Observable(this.waitTimer);
  }

  waitTimer(observer) {
    setTimeout(() => {
      observer.next('Done waiting for 5 sec');
      observer.complete();
    }, 5000);
  }
}
