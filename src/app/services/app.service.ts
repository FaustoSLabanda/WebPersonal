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
    public idioma: string;
    constructor(public translate: TranslateService) {
        this.idioma = 'en';
        this.traducir();
    }

    public traducir() {
        this.translate.setDefaultLang(this.idioma);
        this.translate.use(this.idioma);
    }

}
