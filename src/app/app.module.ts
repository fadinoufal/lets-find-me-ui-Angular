import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormArray, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatRippleModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatDialogModule,
  MatMenuModule,
  MatOptionModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserServiceService} from './user-service.service';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PostCreationComponent } from './posts/post-creation/post-creation.component';
import {PostService} from './posts/post-creation/post.service';
import {PostCreationModule} from './posts/post-creation/post-creation.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { httpInterceptorProviders, AuthInterceptor } from './auth/auth-interceptor';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { PostCardComponent } from './posts/post-card/post-card.component';
import { PostCardResaultComponent } from './posts/post-card-resault/post-card-resault.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RatingComponent } from './rating/rating.component';
import { PostResaultComponent } from './posts/post-resault/post-resault.component';
import { SearchCardComponent } from './posts/search-card/search-card.component';
import { PostCreationLayoutComponent } from './posts/post-creation-layout/post-creation-layout.component';
import { PostSearchResultLayoutComponent } from './posts/post-search-result-layout/post-search-result-layout.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    LoginComponent,
    UserComponent,
    BreadcrumbComponent,
    MainNavComponent,
    RegisterComponent,
    AdminComponent,
    PageNotFoundComponent,
    PostCardComponent,
    PostCardResaultComponent,
    HomePageComponent,
    RatingComponent,
    PostResaultComponent,
    SearchCardComponent,
    PostCreationLayoutComponent,
    PostSearchResultLayoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    //material
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatRippleModule,
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    PostCreationModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  providers: [
    PostService,
    UserServiceService, 
    httpInterceptorProviders,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
