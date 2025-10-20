import React, {useState, useCallback, useMemo} from 'react';



export const productsContext = React.createContext();



const ContextProvider = productsContext.Provider;

export const ProductsProvider = ({children}) => {

  const callback = useCallback((data) => {}, []);


    const info = {
        a: 'text from context',
        b: 2,
        callback
    };

    return <ContextProvider value={info}>{children}</ContextProvider>
}

