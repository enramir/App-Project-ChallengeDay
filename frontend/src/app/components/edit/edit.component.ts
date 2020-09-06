import { Component, OnInit } from '@angular/core';
import { Device } from '../../models/device';
import { DeviceService } from '../../services/device.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['../create/create.component.css'],
  providers: [DeviceService]
})
export class EditComponent implements OnInit {

  public device: Device;
  public n: number;
  

  constructor(
    private _deviceService: DeviceService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.device = new Device('','','','','');
    
   }

  ngOnInit(): void {
    // this.getProduct();
  }

  // onSubmit(){
  //   console.log(this.product);
  //   this._productService.update(this.product.name, this.product).subscribe(
  //     response => {
      
  //       if(response == 'OK'){
          
  //         // Alert
  //         swal(
  //           '¡Producto guardado!',
  //           'El producto se ha editado y guardado correctamente.',
  //           'success'
  //         );

  //         this._router.navigate(['/home']);
        
  //       }else{
  //         response.status(405);
  //       } 

  //     },
  //     error => {
  //       console.log(error);
  //       swal(
  //         '¡Producto no guardado!',
  //         'El producto no se ha editado correctamente.',
  //         'error'
  //       );
  //     }
  //   );
  // }

  // getProduct(){
  //   this._route.params.subscribe(params => {
      
  //     let name = params['name'];
  //     console.log("name: "+name);
  //     this._productService.getProduct(name).subscribe(
  //       response => {
  //         this.product = response;
  //         console.log(this.product);
  //       },
  //       error => {
  //         console.log(error);
  //       }
  //     )


  //   });
  // }

}
