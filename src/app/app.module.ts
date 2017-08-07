import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './pricing/header/header.component';
import { SubHeaderComponent } from './pricing/subheader/subheader.component';
import { FooterComponent } from './pricing/footer/footer.component';
import { EscapeHtmlPipe } from './shared/services/keep-html.pipe';
import { ContentTable } from './pricing/content-table/content-table.component';
import { AgGridModule } from 'ag-grid-angular/main';

const appRoutes: Routes = [
  { path: 'pricing', component: PricingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    HeaderComponent,
    SubHeaderComponent,
    FooterComponent,
    EscapeHtmlPipe,
    ContentTable,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgGridModule.withComponents([]),
    BsDropdownModule.forRoot(),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
