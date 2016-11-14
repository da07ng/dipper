declare class ServerInfo {
  adminTokenServiceUrl: string;
  currentVersion: number;
  server: string;
  shortLivedTokenValidity: number;
  tokenServiceUrl: string;

  toJSON(): any;
}

export = ServerInfo;
