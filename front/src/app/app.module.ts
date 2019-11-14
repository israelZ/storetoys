import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';


//tools of angular
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Component
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { UsersComponent } from './components/menu/users/users.component';
import { UpdateUserComponent } from './components/menu/users/update-user/update-user.component';
import { ItemsComponent } from './components/menu/items/items.component';
import { UpdateItemComponent } from './components/menu/items/update-item/update-item.component';
import { ManueClientComponent } from './components/manue-client/manue-client.component';
import { AboutComponent } from './components/manue-client/about/about.component';
import { ToysitemsComponent } from './components/manue-client/toysitems/toysitems.component';
import { HistoryOrderComponent } from './components/manue-client/history-order/history-order.component';
import { ToysComponent } from './components/manue-client/toysitems/toys/toys.component';
import { SpecificItemComponent } from './components/manue-client/toysitems/toys/specific-item/specific-item.component';
import { ListBuyComponent } from './components/manue-client/list-buy/list-buy.component';
import { ManuWorkerComponent } from './components/manu-worker/manu-worker.component';
import { EditOrderComponent } from './components/manu-worker/edit-order/edit-order.component';
import { EditItemsComponent } from './components/manu-worker/edit-items/edit-items.component';
import { OrderClientComponent } from './components/manu-worker/edit-order/order-client/order-client.component';
import { OrderUpdataComponent } from './components/manu-worker/edit-order/order-updata/order-updata.component';
import { from } from 'rxjs';
import { ParticlesModule } from 'angular-particle';
import { LayoutModule } from '@angular/cdk/layout';
import { NgxPopper } from 'angular-popper';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    UsersComponent,
    UpdateUserComponent,
    ItemsComponent,
    UpdateItemComponent,
    ManueClientComponent,
    AboutComponent,
    ToysitemsComponent,
    HistoryOrderComponent,
    ToysComponent,
    SpecificItemComponent,
    ListBuyComponent,
    ManuWorkerComponent,
    EditOrderComponent,
    EditItemsComponent,
    OrderClientComponent,
    OrderUpdataComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ParticlesModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatRippleModule,
    MatSidenavModule,MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule, MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    LayoutModule,
    NgxPopper,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
