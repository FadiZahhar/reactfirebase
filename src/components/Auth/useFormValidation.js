import React from "react";
/*
*
* event.target.name and return the handleChange
*/
function useFormValidation(initialState) {
    const [values, setValues]  = React.useState(initialState)

    function handleChange(event) {
        event.persist();
        setValues(previousValues => ({
            ...previousValues,
            [event.target.name]: event.target.value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log({ values } );
    }

    return { handleSubmit, handleChange, values};
}

export default useFormValidation;
