declare class OAuthInfo {
  appId: string;
  authNamespace: string;
  expiration: number;
  locale: string;
  minTimeUntilExpiration: number;
  popup: boolean;
  popupCallbackUrl: string;
  popupWindowFeatures: string;
  portalUrl: string;

  toJSON(): any;
}

export = OAuthInfo;
