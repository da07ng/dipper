import Accessor = require("./Accessor");

declare abstract class JSONSupport extends Accessor {
  protected read(json: Object): JSONSupport;

  abstract toJSON(): Object;
}

export = JSONSupport;
