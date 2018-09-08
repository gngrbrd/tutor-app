import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// import created components here
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { ArticleComponent } from './article/article.component';
import { SectionComponent } from './section/section.component';

import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { AssignTwoComponent } from './assign-two/assign-two.component';

// add components to declerations
@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    WarningComponent,
    ArticleComponent,
    SectionComponent,
    ServersComponent
    ServerComponent,
    AssignTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
