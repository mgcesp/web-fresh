import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../heroes/hero';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroService {
	private url = 'app/heroes';

	constructor(private http: Http) {}

	getHeroes(): Promise<Hero[]> {
		return this.http.get(this.url)
							.toPromise()
							.then(response => response.json().data as Hero[])
							.catch(this.handleError);
	}	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}