import { AccountPath, PostPath } from "./lib/consts";
import { Cmn } from "./lib/types/common";
import { Req } from "./lib/types/req";
import { Res } from "./lib/types/res";

export namespace Sms4 {
    export namespace Types {
        export import Common = Cmn;
        export import Request = Req;
        export import Response = Res;
    }
    export namespace Consts {
        export import Account = AccountPath;
        export import Post = PostPath;
    }
}