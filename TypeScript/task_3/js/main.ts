/// <reference path="crud.d.ts" />

import {RowID, RowElement} from './interface';
import * as CRUD from './crud';

  
const row: RowElement = {
  firstName:'Guillaume',
  lastName:'Salva'
};
  
const newRowID: RowID = CRUD.insertRow(row);

CRUD.updateRow(newRowID, {firstName: 'Guillaume', lastName: 'Salva', age: 23});

CRUD.deleteRow(newRowID);
 