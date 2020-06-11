import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { GalleryModule } from 'projects/gallery/src/public-api';
import { DemoWholeConfig } from './components/demo-whole-config/demo-whole-config.component';
import { HeaderComponent } from './components/header/header.component';

const materialModules = [
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [AppComponent, DemoWholeConfig, HeaderComponent],
  imports: [
    ...materialModules,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    GalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
