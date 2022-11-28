import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TopicComponent } from './components/topic/topic.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, TopicComponent, ItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
