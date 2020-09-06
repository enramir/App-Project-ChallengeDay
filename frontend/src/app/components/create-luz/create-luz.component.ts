import { Component, OnInit } from '@angular/core';
import { Device } from '../../models/device';
import { DeviceService } from '../../services/device.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-create-luz',
  templateUrl: './create-luz.component.html',
  styleUrls: ['./create-luz.component.css'],
  providers: [DeviceService]
})
export class CreateLuzComponent implements OnInit {

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
            '¡Contador de luz registrado!',
            'El contador se ha añadido correctamente.',
            'success'
          );

          this._router.navigate(['/contadoresLuz']);
        
        }else{
          response.status(405);
        } 

      },
      error => {
        console.log(error);
        swal(
          '¡Contador de luz no registrado!',
          'El contador no se ha guardado correctamente.',
          'error'
        );
      }
    );
  }

}
