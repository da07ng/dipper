interface RequestParam {
  callbackParamName?: string;
  content?: Object;
  form?: Object;
  handleAs?: string;
  timeout?: number;
  url: string;
}

interface OptionsParam {
  disableIdentityLookup?: boolean;
  usePost?: boolean;
  useProxy?: boolean;
}

declare function request(request: RequestParam, options?: OptionsParam): IPromise<any>;

export = request;
