import { ApiResponse } from "@/utils/apiResponse";
import { Auth } from "./auth";

export type Props<T> = {
    auth?: Auth,
    response?:ApiResponse<T>
}
