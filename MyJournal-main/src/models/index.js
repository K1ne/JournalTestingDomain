// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Login, Journal, Setting } = initSchema(schema);

export {
  Login,
  Journal,
  Setting
};