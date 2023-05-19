import { useEffect } from "react";

const useTitle = (title) => {

    useEffect(() => {

        document.title = `TStore-${title}`


    },[title])

};

export default useTitle;