import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './alp-app/app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MasterLayoutModule } from './master-layout/master-layout.module';
import { SocialLoginModule, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { environment } from 'src/environments/environment';
import { SigninAuthService } from './shared/helpers/signin-auth.service';
import { AuthenticateService } from './user-authentication/services/authenticate.service';
import { ErrorsInterceptor } from './shared/helpers/errors.interceptor';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './app-config/app-config.service';
import { FullNamePipe } from './shared/pipes/full-name.pipe';
import { AccountComponent } from './user-authentication/account/account.component';
import { GithubButtonComponent } from './user-authentication/github-button/github-button.component';
import { GoogleButtonComponent } from './user-authentication/google-button/google-button.component';
import { SignInComponent } from './user-authentication/signin/signin.component';
import { SignupComponent } from './user-authentication/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.module.routing';

@NgModule({
  declarations: [
    AppComponent,
    FullNamePipe,
    AccountComponent,
    SignInComponent,
    SignupComponent,
    GoogleButtonComponent,
    GithubButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MasterLayoutModule,
    SocialLoginModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SigninAuthService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorsInterceptor,
      multi: true,
    },
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.googleAuthClientID),
          },
        ],
        onError: (err: any) => {
          console.error(err);
        },
      },
    },
    AuthenticateService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
