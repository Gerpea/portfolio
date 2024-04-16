import { useCallback, useState } from "react";

const useToggle = (initialValue=false): [boolean, () => void] => {
    const [enabled, setEnabled] = useState(initialValue);
    
    const toggle = useCallback(() => {
        setEnabled(enabled => !enabled)
    }, [])

    return [enabled, toggle]
}

export default useToggle