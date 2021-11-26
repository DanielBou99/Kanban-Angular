import { column } from './../../models/column.model';
import { Board } from './../../models/board.model';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board("Teste Board", [
    new column(
      'Ideias',['Ideia 1', 'Ideia 2', 'Ideia 3']
    ),
    new column(
      'Fazendo',['Ideia 4', 'Ideia 5', 'Ideia 6']
    ),
    new column(
      'Feito',['Ideia 7', 'Ideia 8', 'Ideia 9']
    )
  ]);

  ngOnInit(): void {
  }

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
