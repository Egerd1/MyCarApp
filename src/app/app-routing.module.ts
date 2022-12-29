import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './carcomp/car/car.component';
import { ClientComponent } from './clientcomp/client/client.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'client', component: ClientComponent },
  { path: 'cars', component: CarComponent },
  { path: '', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [ClientComponent, CarComponent];
