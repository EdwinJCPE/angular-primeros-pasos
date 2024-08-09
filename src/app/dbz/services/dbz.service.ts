import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

// console.log(v4());

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  addCharacter(character: Character): void
  {
    // console.log('MainPage');
    console.log(character);
    // this.characters.push(character);

    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    const newCharacter = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(index: number): void
  {
    // console.log('MainPage', index);

    if (index !== -1) {
      this.characters.splice(index, 1);
    }
  }

  deleteCharacterById(id: string): void {
    // console.log('MainPage', id);

    this.characters = this.characters.filter(character => character.id!== id);

    // const index = this.characters.findIndex(c => c.id === id);
    // if (index!== -1) {
    //   this.characters.splice(index, 1);
    // }
  }
}
