import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

const material_comm=[
  MatButtonModule,
  MatMenuModule,
  MatIconModule
]

@NgModule({
  imports: [
    material_comm
  ],
  exports:[
    material_comm
  ]
})
export class MaterialModuleModule { }
