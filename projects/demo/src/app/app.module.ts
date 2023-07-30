import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';

import { AppComponent } from './app.component';
import { DemoWholeConfigComponent } from './components/demo-whole-config/demo-whole-config.component';
import { HeaderComponent } from './components/header/header.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { DemoThumbsOrientationComponent } from './components/demo-thumbs-orientation/demo-thumbs-orientation.component';
import { DemoMultipleItemsComponent } from './components/demo-multiple-items/demo-multiple-items.component';
import { DemoCustomTemplatesComponent } from './components/demo-custom-templates/demo-custom-templates.component';
import { GalleryModule } from '@daelmaak/ngx-gallery';

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
  declarations: [
    AppComponent,
    DemoWholeConfigComponent,
    HeaderComponent,
    ShowcaseComponent,
    DemoThumbsOrientationComponent,
    DemoMultipleItemsComponent,
    DemoCustomTemplatesComponent,
  ],
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
