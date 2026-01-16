import {RowID, RowElement} from './interface';

export function insertRow(row: RowElement): RowID;
export function deleteRow(rowid: RowID): void;
export function updateRow(rowid: RowID, row: RowelEment): RowID;
