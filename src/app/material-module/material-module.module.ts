import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';


const material_comm=[
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSnackBarModule
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
