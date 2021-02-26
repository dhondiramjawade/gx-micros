import { Injectable } from '@nestjs/common';
import { Todo } from "@gx/todos";
@Injectable()
export class AppService {
  getData(): Todo[] {
    return [{ message: "Take out trash", done: false },
    { message: "Apply for xyz", done: false }];
  }
}
