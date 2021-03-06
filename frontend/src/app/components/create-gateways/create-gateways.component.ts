import { Component, OnInit } from '@angular/core';
import { DeviceGateway } from '../../models/deviceGateway';
import { DeviceService } from '../../services/device.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-create-gateways',
  templateUrl: './create-gateways.component.html',
  styleUrls: ['./create-gateways.component.css'],
  providers: [DeviceService]
})
export class CreateGatewaysComponent implements OnInit {

  public device: DeviceGateway;
  public n: number;

  constructor(
    private _deviceService: DeviceService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.device = new DeviceGateway('','','','','','',this.n);
    
   }

  ngOnInit(): void {
  }

  onSubmit(){
    
    this._deviceService.create(this.device).subscribe(
      response => {
        console.log(response);
        if(response == 'Created'){
          
          // Alert
          swal(
            '¡Gateway registrado!',
            'El gateway se ha añadido correctamente.',
            'success'
          );

          this._router.navigate(['/gateways']);
        
        } 

      },
      error => {
        //console.log(error.error);
        if(error.error == 'Conflict'){
          swal(
            '¡Gateway ya registrado!',
            'No se puede insertar dos veces el mismo dispositivo.',
            'error'
          );
        }
        console.log(error);
    
      }
    );
  }

}
