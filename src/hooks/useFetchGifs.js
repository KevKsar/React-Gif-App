import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (categories) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs(categories).then((images) => {
            setTimeout(() => {
                setState({
                    data: images,
                    loading: false,
                });
            }, 500);
        });
    }, [categories]);

    return state;
};

/*
La function useEffect :
  -permet d'executer du code de facon conditionel.
  -son contenu n'est pas mit a jour a chaque rendus saufe en cas de dépendence passé une second argument.
*/
