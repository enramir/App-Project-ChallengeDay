import { Component, OnInit } from '@angular/core';
import { Device } from '../../models/device';
import { DeviceService } from '../../services/device.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [DeviceService]
})
export class CreateComponent implements OnInit {

  public device: Device;

  constructor(
    private _deviceService: DeviceService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.device = new Device('','','','','');
    
   }

  ngOnInit(): void {
  }

  onSubmit(){
    
    this._deviceService.create(this.device).subscribe(
      response => {
        
        if(response == 'Created'){
          
          // Alert
          swal(
            '¡Contador de agua registrado!',
            'El contador se ha añadido correctamente.',
            'success'
          );

          this._router.navigate(['/contadoresAgua']);
        
        } 

      },
      error => {
        console.log(error);
        if(error.error == 'Conflict'){
          swal(
            '¡Contador de agua ya registrado!',
            'No se puede insertar dos veces el mismo dispositivo.',
            'error'
          );
        }
      }
    );
  }

} 
