import { createContext } from "react";
import { Navigate } from "react-router-dom";



export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const goToViewDetails = (id) => {
        console.log(id)
    }

    const functionality = {
        goToViewDetails,
    }

    return (
        <DataContext.Provider value={functionality}>
            {children}
        </DataContext.Provider>
    );

}

export default DataProvider;