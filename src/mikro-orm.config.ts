import { Options } from '@mikro-orm/core';
import { DUser, Project, Stage, Task } from './entities';

const config: Options = {
  entities: [Project, Stage, Task, DUser],
  dbName: 'projectcat',
  type: 'postgresql',
  debug: process.env.DEBUG === '1',
};

export default config