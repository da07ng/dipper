declare namespace Accessor {
  export interface ClassMetaData {
    properties?: Object;

    reader: {
      exclude: string[],
      add: string[]
    };
  }
}

declare class Accessor {
  constructor(params?: Object);

  protected getDefaults(): Object;

  protected normalizeCtorArgs(params?: Object): Object;

  protected initialize(): void;

  get(props: string | string[]): any;

  set(prop: string, value: any): Accessor;

  watch(prop: string | string[]): IHandle;

  destroy(): void;
}

export = Accessor;
