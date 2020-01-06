import { useContext, useEffect } from 'react';
import { UIContext } from '../context';

const useData = () => {
    const [ UIState, setUIState ] = useContext(UIContext);


    useEffect(() => {
        loadData();
    }, [UIState.activated])

    function setActivateData(data){
        setUIState((prev) => ({
            ...prev,
            activated: data,
        }))
    }

    async function loadData(){
        const tempData = await require('../data/temp.json');
        setUIState((prev) => ({
            ...prev,
            data: tempData,
        }))
    }

    function setActivateFunction(activateFunction){
        setUIState((prev) => ({
            ...prev,
            activateFunction
        }))
    }


    function changeActivate(data){
        if(data !== undefined){
            UIState.activateFunction(data);
        }
    }



    
    return {
        data: UIState.data,
        activated: UIState.activated,
        setActivateData,
        loadData,
        setActivateFunction,
        changeActivate,
    }
}

export default useData

