import { Component, Input } from '@angular/core';
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
export class QuestionItemComponent {
  @Input({required: true}) question!: Question;
}
