import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../../interfaces/question';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-question-item',
  standalone: true,
  imports: [
    JsonPipe,
  ],
  templateUrl: './question-item.component.html',
  styleUrl: './question-item.component.scss'
})
export class QuestionItemComponent implements OnInit {
  @Input({required: true}) question!: Question;
  @Output() loaded = new EventEmitter<number>();

  ngOnInit() {
    this.loaded.emit(this.question.id);
  }
}
