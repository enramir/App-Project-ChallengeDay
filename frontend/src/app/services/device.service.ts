import { Injectable } from '@angular/core';
import { Device } from '../models/device';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';


@Injectable()
export class DeviceService{

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        
        this.url = Global.url;

    }
    
    //METHODS
    
    getDevices():Observable<any>{
        return this._http.get(this.url + "/device");
    }

    // getDevice(name):Observable<any>{
    //     return this._http.get(this.url + "/device/" + name);
    // }

    // search(searchString):Observable<any>{
    //     return this._http.get(this.url + "/device/search/" + searchString);
    // }

    create(device):Observable<any>{
        
        let data = device;

        return this._http.post(this.url + "/device", data, {responseType: 'text'});
    }

    // update(name, device):Observable<any>{
    //     let data = device;
    //     console.log(JSON.stringify(data));
    //     console.log(data);
    //     var data_sinId = [];
    //     data_sinId.push({
    //         "name": data.name,
    //         "description": data.description,
    //         "price": data.price
    //     });
        
    //     console.log("data sin id"+ JSON.stringify(data_sinId[0]));

    //     return this._http.put(this.url + "/device/" + name, data_sinId[0], {responseType: 'text'});
    // }

    // delete(name):Observable<any>{ 
        
    //     return this._http.delete(this.url + "/device/" + name, {responseType: 'text'});
    // }

    
}
