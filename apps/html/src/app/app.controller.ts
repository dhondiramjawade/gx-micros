import { Controller, Get, Render } from '@nestjs/common';
import axios from 'axios';

import { AppService } from './app.service';
import { Todo } from "@gx/todos";
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('index')
  async root() {
    return {
      todos: await this.getData()
    }
  }

  async getData() {
    try {
      console.log("getting data log")
      const res = await axios.get<Todo[]>(process.env.apiPath || 'http://localhost:3333');
      return res.data;
    } catch (error) {
      console.log(error)
    }
  }

}
