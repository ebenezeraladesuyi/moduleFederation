
import {useState, useEffect} from "react";
import { getData } from "../utils/Api";

export const UseFetch = () => {
    
        const [state, setState] = useState([] as any)

        useEffect(() => {
                getData().then((res: any) => {
                        setState(res)
                })
        }, [])

        console.log("any", state?.data)

        return state?.data

}