import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { MemberListComponent } from './_pages/member-list/member-list.component';
import { ModalCreateIntegrantComponent } from './_components/modal-create-integrant/modal-create-integrant.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditIntegrantModalComponent } from './_components/edit-integrant-modal/edit-integrant-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MemberListComponent,
    ModalCreateIntegrantComponent,
    EditIntegrantModalComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
