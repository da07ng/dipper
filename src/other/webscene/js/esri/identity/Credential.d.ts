import Accessor = require("../core/Accessor");

declare class Credential extends Accessor implements IEvented {
  expires: number;
  isAdmin: boolean;
  oAuthState: any;
  server: string;
  ssl: boolean;
  token: string;
  userId: string;

  refreshToken(): any;

  toJSON(): any;

  emit(type: string, event?: Event): boolean;

  on(type: IExtensionEvent, listener: (event: {}) => void): IHandle;
  on(type: "destroy", listener: (event: { target: Credential }) => void): IHandle;
  on(type: "token-change", listener: (event: { target: Credential }) => void): IHandle;
  on(type: string, listener: (event: {}) => void): IHandle;
}

export = Credential;
