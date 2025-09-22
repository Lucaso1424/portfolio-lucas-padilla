"use client";
import { useState, useEffect } from 'react'

export const useWindowDimensions = function () {
    let dimensions = useState<{ width: number | undefined; height: number | undefined }>({
        width: undefined,
        height: undefined,
    }), windowDimensions = dimensions[0], setWindowDimensions = dimensions[1];
    useEffect(function () {
        function handleResize() {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []);
    return windowDimensions;
};

export default useWindowDimensions;