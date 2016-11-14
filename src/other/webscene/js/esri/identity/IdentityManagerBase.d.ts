import Evented = require("dojo/Evented");
import Credential = require("./Credential");
import OAuthInfo = require("./OAuthInfo");
import ServerInfo = require("./ServerInfo");

declare class IdentityManagerBase extends Evented {
  tokenValidity: number;

  checkSignInStatus(resUrl: string): IPromise<Credential>;

  destroyCredentials(): void;

  findCredential(url: string, userId?: string): Credential;

  findOAuthInfo(url: string): OAuthInfo;

  findServerInfo(url: string): ServerInfo;

  generateToken(serverInfo: ServerInfo, userInfo: any, options?: any): IPromise<any>;

  getCredential(url: string, options?: any): IPromise<Credential>;

  initialize(json: Object): any;

  isBusy(): boolean;

  oAuthSignIn(resUrl: string, serverInfo: ServerInfo, OAuthInfo: OAuthInfo, options?: any): IPromise<Credential>;

  registerOAuthInfos(oAuthInfos: OAuthInfo[]): void;

  registerServers(serverInfos: ServerInfo[]): void;

  registerToken(properties: any): void;

  setProtocolErrorHandler(handlerFunction: Function): void;

  setRedirectionHandler(handlerFunction: Function): void;

  signIn(url: string, serverInfo: ServerInfo, options?: any): IPromise<Credential>;

  toJSON(): any;

  on(type: IExtensionEvent, listener: (event: {}) => void): IHandle;
  on(type: "credential-create", listener: (event: { target: IdentityManagerBase }) => void): IHandle;
  on(type: "credentials-destroy", listener: (event: { target: IdentityManagerBase }) => void): IHandle;
  on(type: string, listener: (event: {}) => void): IHandle;
}

export = IdentityManagerBase;
