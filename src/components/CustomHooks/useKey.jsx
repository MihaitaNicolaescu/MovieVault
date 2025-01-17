import { useEffect } from "react";

export function useKey(key, action){
    useEffect(() => {
        function callback(event){
            if (event.key.toLowerCase() === key.toLowerCase()) {
                action();
            }
        }

        document.addEventListener('keydown', callback);

        return () => {
            document.removeEventListener('keydown', callback);
        }
    }, [key, action])
}