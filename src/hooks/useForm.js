import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations ={} ) => {

    const [formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({})
    
    useEffect(() => {
        createValidators();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formState])

    useEffect(() => {
      setFormState(initialForm)
    }, [initialForm])
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const createValidators = () =>{

        const formCheckedValues = {};

        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage] = formValidations[formField]
            formCheckedValues[`${formField}Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation(formCheckedValues);

    }

    const isFormValid = useMemo(()=>{

        for(const formValue of Object.keys(formValidation)){
            if (formValidation[formValue] !== null) return false
        }
        return true
    },[formValidation])
    

    return {
        ...formState,
        ...formValidation,
        formState,
        isFormValid,
        onInputChange,
    }
}