import { NgModule } from "@angular/core";
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [
    // Aquí se importan los componentes que se usarán en este módulo
    CounterComponent,
  ],
  exports: [
    // Aquí se exportan los componentes que se pueden utilizar en otros módulos
    CounterComponent
  ]
})
export class CounterModule {

}
