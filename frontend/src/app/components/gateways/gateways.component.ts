import { Component, OnInit } from '@angular/core';
import { DeviceGateway } from '../../models/deviceGateway';
import { DeviceService } from '../../services/device.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-gateways',
  templateUrl: './gateways.component.html',
  styleUrls: ['./gateways.component.css'],
  providers: [DeviceService]
})
export class GatewaysComponent implements OnInit {

  public url: string;
  public devices: Array<DeviceGateway>;
  public title: string;

  constructor(
    private _deviceService: DeviceService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    
    this.url = Global.url;
    this.title = "Gateways";
   }

  ngOnInit(): void {

    this._deviceService.getDevices().subscribe(
      response => {
        console.log(JSON.stringify(response,null,2));
        if(response){
          this.devices = response;
        }
      },
      error => {
        console.log(error);
      }
      
    );
  

  // delete(name){

  //   swal({
  //     title: "¿Estás seguro?",
  //     text: "¡Una vez borrado, no podrás recuperar el producto!",
  //     icon: "warning",
  //     buttons: [true, true],
  //     dangerMode: true
  //   })
  //   .then((willDelete) => {
  //     if (willDelete) {
  //       this._deviceService.delete(name).subscribe(
  //         response => {
  //           swal("¡El producto ha sido borrado!", {
  //             icon: "success",
  //           });

  //           this._router.navigate(['/home']);
  //         },
  //         error => {
  //           console.log(error);
  //         }
  //       );
        
  //     } else {
  //       swal("¡Nada se ha borrado!");
  //     }
  //   });

    
  }

}
