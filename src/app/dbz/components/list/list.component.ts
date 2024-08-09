import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  // public characterList: Character[] = [
  //   {
  //     name: 'Trunks',
  //     power: 10
  //   }
  // ];

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();
  // public onDelete: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    console.log({index});

    this.onDelete.emit(index);

  }

  onDeleteCharacterById(id?: string): void {
  // onDeleteCharacterById(id: string): void {
    // console.log({id});

    if (!id) return;

    console.log({ id });


    this.onDeleteById.emit(id);
  }

  onDeleteCharacter2(character: Character): void {
    const index = this.characterList.indexOf(character);
    console.log(character, index);

    if (index !== -1) {
      this.characterList.splice(index, 1);
    }
  }
}
