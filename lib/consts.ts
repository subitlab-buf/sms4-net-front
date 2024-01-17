export namespace AccountPath {
    export const SEND_CAPTCHA = "/account/send-captcha";
    export const REGISTER = "/account/register";
    export const LOGIN = "account/login";
    /**
     * Need to append `id` to url.
     */
    export const GET_INFO = "/account/get/";
    export const BULK_GET_INFO = "/account/bulk-get";
    export const SNED_RESET_PASSWORD_CAPTCHA = "/account/send-reset-password/captcha";
    export const RESET_PASSWORD = "/account/reset-password";
    export const MODIFY = "/account/modify";
    export const LOGOUT = "/account/logout";
    export const SET_PERMISSIONS = "/account/set-permissions";
}

export namespace PostPath {
    export const NEW = "/post/new";
    /**
     * Uses url query params.
     * 
     * @param from Filter posts newer than this id.
     * @param limit Max posts' amount.
     * @param creator Filter posts by this user.
     * @param status Filter posts in this status.
     * @param on Filter posts available on this date.
     * @param screen Filter posts available on this screen.
     */
    export const FILTER = "/post/filter?";
    /**
     * Needs to append `id` to url.
     */
    export const GET_INFO = "/post/get/";
    export const BULK_GET_INFO = "/post/bulk-get";
    /**
     * Needs to append `id` to url.
     */
    export const MODIFY = "/post/modify/";
    /**
     * Needs to append `id` to url.
     */
    export const REVIEW = "/post/review/";
    /**
     * Needs to append `id` to url.
     */
    export const REMOVE = "/post/delete/";
    export const BULK_REMOVE = "/post/bulk-remove";
}