import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { PaginatedResponse } from '../interfaces/paginated-response';
import { Question } from '../interfaces/question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {

  constructor(private httpClient: HttpClient) {
  }

  getQuestions(page: number): Observable<PaginatedResponse<Question>> {
    return this.httpClient.get<PaginatedResponse<Question>>(`${environment.apiUrl}question`, {
      params: {
        take: 5,
        skip: page * 5,
      },
    });
  }
}
