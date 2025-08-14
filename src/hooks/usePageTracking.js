import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export default function usePageTracking() {
    const location = useLocation();

    useEffect(() => {
        if (window.gtag) {
            window.gtag("config", "G-VDWS2GT89P", {
                page_path: location.pathname + location.search,
            });
        }
    }, [location]);
}
