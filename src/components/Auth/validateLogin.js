/*
*
* a method that will takes the values state of our object
* and check if they are valid or not 
*/
export default function validateLogin(values) {
    let errors = {}

     // Email Errors
    if (!values.email) {
        errors.email = "Email required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }
    // Password Errors
    if (!values.password) {
        errors.password = "Password required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }

    return errors;

}
