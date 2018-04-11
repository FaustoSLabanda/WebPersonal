import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { TranslateService } from 'ng2-translate';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { environment } from '@env/environment';
import 'rxjs/Rx';

@Injectable()
export class AppService {

    constructor(public translate: TranslateService) {

    }

}
