'use client';

import { Children, useEffect, useState } from "react";

interface CilentOnlyProps {
    children: React.ReactNode;
}

const ClientOnly: React.FC<CilentOnlyProps> = ({
    children
}) => {
    const [hasMounted, sethasMounted] = useState(false);

    useEffect(() =>{
        sethasMounted(true);
    }, []);
    
    if (!hasMounted) {
        return null;
    }

    return (
        <>
        {children}
        </>
     );
}
 
export default ClientOnly;