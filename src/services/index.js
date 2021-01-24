import {UserService} from "./user-service";
import {htmlClient} from "./html-client";

export const services = {
    userService: new UserService(htmlClient)
}