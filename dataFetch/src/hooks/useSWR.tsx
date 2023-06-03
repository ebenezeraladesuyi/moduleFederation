import { getData } from "../utils/Api";
import useSWR from "swr";


export const useFetchSWR = () => {
    const { isLoading, data } = useSWR(
        "data", getData
    )

    return { isLoading, data } as const 
}
