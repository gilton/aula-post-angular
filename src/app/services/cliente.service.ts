import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.models';
import { Response } from '../models/response.models';

const apiURL = "https://run.mocky.io/v3/5ed7824d-0d38-4cb9-b1a2-6b30c3e7a3a5";

@Injectable()
export class ClienteService {
	
	
	constructor(private http:HttpClient) { }
	
	postCliente(cliente: Cliente): Observable<Response> {
		return this.http.post<Response>(apiURL, cliente);
	}
	
}
