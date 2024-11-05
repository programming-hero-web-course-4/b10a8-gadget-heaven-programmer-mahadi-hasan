import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useTabTitle = (title) => {
    const location = useLocation();
    useEffect(() => {
        document.title = title
    }, [location, title])
}
export default useTabTitle;