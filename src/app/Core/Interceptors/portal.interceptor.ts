import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../Environment/environment';


@Injectable()
export class PortalInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isFullUrl = request.url.startsWith('http');
    const apiRequest = isFullUrl
      ? request
      : request.clone({ url: `${environment.baseUrl}${request.url}` });
    return next.handle(apiRequest);
  }
}
