import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { BugTrackerJHipsterSharedModule } from 'app/shared/shared.module';
import { BugTrackerJHipsterCoreModule } from 'app/core/core.module';
import { BugTrackerJHipsterAppRoutingModule } from './app-routing.module';
import { BugTrackerJHipsterHomeModule } from './home/home.module';
import { BugTrackerJHipsterEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    BugTrackerJHipsterSharedModule,
    BugTrackerJHipsterCoreModule,
    BugTrackerJHipsterHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    BugTrackerJHipsterEntityModule,
    BugTrackerJHipsterAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class BugTrackerJHipsterAppModule {}