import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const useSetNewParams = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    if (!router || !pathname || !searchParams) {
        throw new Error("One or more required hooks are undefined.");
    }

    const setNewParams = (key: string, value: string | number) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        current.set(key, value.toString());

        const search = current.toString();
        const query = search ? `?${search}` : "";

        router.push(`${pathname}${query}`, {scroll: false});
    };

    return setNewParams;
};