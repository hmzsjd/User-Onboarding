import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('First name not entered')
        .min(3, 'First name must be greater than 3 characters.'),
    last_name: yup
        .string()
        .trim()
        .required('Last name not entered')
        .min(3, 'Last name must be greater than 3 characters.'),
    email: yup
        .string()
        .email('Invalid Email address.')
        .required('Email is required.'),
    password: yup
        .string()
        .trim()
        .required('Password not entered')
        .min(8, 'Password must be at least 8 characters.'),
    agreed: yup.boolean().oneOf([true], "You must accept the terms of service.")
});

export default formSchema;