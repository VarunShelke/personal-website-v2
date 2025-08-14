import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export default function usePageTracking() {
    const location = useLocation();

    useEffect(() => {
        if (window.gtag) {
            window.gtag("config", "G-2T5D23Y46B", {
                page_path: location.pathname + location.search,
            });
        }
    }, [location]);
}
