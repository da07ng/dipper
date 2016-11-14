
export function subclass(bases?: (new (...params: any[]) => Object)[]);
export function shared(value);

export interface DojoDeclared {
  inherited<T>(args: IArguments): T;
}

