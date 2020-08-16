import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';


const material_comm=[
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule
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
