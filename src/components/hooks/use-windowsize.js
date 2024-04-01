import {useState, useEffect} from 'react';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);

        // Call handleResize immediately to set initial size
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures this effect only runs once

    return windowSize;
}

export default useWindowSize;
