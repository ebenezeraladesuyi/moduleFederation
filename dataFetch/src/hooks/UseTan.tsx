import { getData } from "../utils/Api";
import { useQuery }  from "@tanstack/react-query"


export const useTan = () => {
    const {isLoading, data } = useQuery({
        queryKey: ["data"],
        queryFn: getData
    })

    return{ data, isLoading } as const
}