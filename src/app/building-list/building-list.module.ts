import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { BuildingsService } from './buildings.service';
import { BuildingListComponent } from './building-list.component';

@NgModule({
  declarations: [
    BuildingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ]
  //providers: [BuildingsService]
})
export class BuildingListModule { }


