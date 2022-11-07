import { MikroORM, SqliteDriver } from '@mikro-orm/sqlite';
import { EntityManager } from '@mikro-orm/sqlite';
import config from './mikro-orm.config'

const orm = await MikroORM.init(config);

const em = orm.em as EntityManager;

import './bot'