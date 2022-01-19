import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonServicesModule } from '../common-services';
import { CONTACTOS_COMPONENTES } from './componente/componente.component';
import { MyCoreModule } from 'src/lib/my-core';


@NgModule({
  declarations:
    [CONTACTOS_COMPONENTES],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    CommonServicesModule, MyCoreModule
  ],
  exports: [CONTACTOS_COMPONENTES]
})
export class ContactosModule { }
