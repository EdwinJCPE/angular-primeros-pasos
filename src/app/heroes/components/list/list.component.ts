import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  // deletedHero?: string;
  public deletedHero?: string;

  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'She Hulk',
    'Thor',
  ];

  removeLastHero(): void {
    // if (this.heroNames.length > 0) {
      this.deletedHero = this.heroNames.pop();
      console.log(`Deleted hero: ${this.deletedHero}`);
    // }
  }

}
