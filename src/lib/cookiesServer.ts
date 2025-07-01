import { cookies} from "next/headers";

export async function getCookieServer() {
    const cookiesAwait = await cookies();

    const token = cookiesAwait.get("user")?.value;

    return token || null;
}