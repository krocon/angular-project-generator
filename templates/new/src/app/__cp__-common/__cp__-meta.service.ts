import { Injectable } from '@angular/core';


@Injectable()
export class __capcp__MetaService<T> {

  readonly = false;

  constructor() {
  }


  getRowClassFn() {
    return (params) => {
      const rowNode: any = params.node;
      if (rowNode['data']) {
        const row: T = rowNode.data;
        if (this.isDeleted(row)) {
          return '__cp__-item-deleted';
        }
        if (this.isChanged(row)) {
          return '__cp__-item-changed';
        }
        if (this.isInserted(row)) {
          return '__cp__-item-inserted';
        }
        if (this.isTemp(row)) {
          return '__cp__-item-temp';
        }
      }
      return '';
    };
  }


  actionDeleteCellRenderer(evt) {
    if (!evt.data || this.readonly) {
      return '';
    }
    const row: T = evt.data;
    if (this.isTemp(row)) {
      return '';
    }
    if (this.isDeleted(row)) {
      return '<i class="material-icons __cp__-icon-size-20" title="Wiederherstellen">restore</i>';
    }
    return '<i class="material-icons __cp__-icon-size-20" title="Löschen">delete_outline</i>';
  }

  actionViewCellRenderer(evt) {
    if (!evt.data) {
      return '';
    }
    return '<i class="material-icons __cp__-icon-size-20" title="Anzeigen">remove_red_eye</i>';
  }

  actionMetaBasedDeleteCellRenderer(evt) {
    if (!evt.data || this.readonly) {
      return '';
    }
    const row: T = evt.data;
    if (this.isDeletable(row)) {
      return '<i class="material-icons __cp__-icon-size-20" title="Löschen">delete_outline</i>';
    }
    if (this.isRestorable(row)) {
      return '<i class="material-icons __cp__-icon-size-20" title="Wiederherstellen">restore</i>';
    }
    return '';
  }

  actionEditCellRenderer(evt) {
    if (!evt.data || this.readonly || this.isDeleted(evt.data)) {
      return '';
    }
    return '<i class="material-icons __cp__-icon-size-20" title="Ändern">edit_outline</i>';
  }

  actionMetaBasedEditCellRenderer(evt) {
    if (!evt.data || this.readonly) {
      return '';
    }
    const row: T = evt.data;
    if (this.isEditable(row)) {
      return '<i class="material-icons __cp__-icon-size-20" title="Ändern">edit_outline</i>';
    }
    return '';
  }


  setChangeByUserDetected(data: T) {
    this.setChanged(data, true);
  }

  setChanged(data: T, b: boolean) {
    this.setMeta(data, 'changed', b);
  }

  isChanged(data: T): boolean {
    return this.isMeta(data, 'changed');
  }


  setDelete(data: T, b: boolean) {
    this.setMeta(data, 'deleted', b);
  }

  isDeleted(data: T): boolean {
    return this.isMeta(data, 'deleted');
  }

  toggleDelete(data: T) {
    this.toggleMeta(data, 'deleted');
  }


  setInserted(data: T, b: boolean) {
    this.setMeta(data, 'inserted', b);
  }

  isInserted(data: T): boolean {
    return this.isMeta(data, 'inserted');
  }


  setWarn(data: T, b: boolean) {
    this.setMeta(data, 'warn', b);
  }

  isWarn(data: T): boolean {
    return this.isMeta(data, 'warn');
  }

  setTemp(data: T, b: boolean) {
    this.setMeta(data, 'temp', b);
  }

  isTemp(data: T): boolean {
    return this.isMeta(data, 'temp');
  }


  setRestorable(data: T, b: boolean) {
    this.setMeta(data, 'restorable', b);
  }

  isRestorable(data: T): boolean {
    return this.isMeta(data, 'restorable');
  }

  setDeletable(data: T, b: boolean) {
    this.setMeta(data, 'deletable', b);
  }

  isDeletable(data: T): boolean {
    return this.isMeta(data, 'deletable');
  }

  setEditable(data: T, b: boolean) {
    this.setMeta(data, 'editable', b);
  }

  isEditable(data: T): boolean {
    return this.isMeta(data, 'editable');
  }

  createCleanArray(arr: T[]) {
    for (let i = 0; i < arr.length; i++) {
      const ele: T = arr[i];
      if (this.isDeleted(ele)) {
        arr[i] = null;
      }
      delete ele['_meta'];
    }
    return arr.filter(n => n);
  }

  private toggleMeta(data: T, key: string) {
    this.createMeta(data);
    data['_meta'][key] = !data['_meta'][key];
  }

  private createMeta(data: T) {
    if (!data['_meta']) {
      data['_meta'] = {};
    }
  }

  private setMeta(data: T, key: string, b: boolean) {
    this.createMeta(data);
    data['_meta'][key] = b;
  }

  private isMeta(data: T, key: string): boolean {
    this.createMeta(data);
    return !!data['_meta'][key];
  }
}
