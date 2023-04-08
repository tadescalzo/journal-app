import { useEffect, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations ={} ) => {

    const [formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({})
    
    useEffect(() => {
        createValidators();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formState])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () =>{

        const formCheckedValues = {};

        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage] = formValidations[formField]
            formCheckedValues[`${formField}Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation(formCheckedValues);
        console.log(formValidation)

    }
    

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
    }
}