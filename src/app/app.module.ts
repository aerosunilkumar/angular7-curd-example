import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AccordionModule } from "ngx-bootstrap/accordion";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { CreateComponent } from "./create/create.component";
import { EditComponent } from "./edit/edit.component";

@NgModule({
  declarations: [AppComponent, ListComponent, CreateComponent, EditComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
