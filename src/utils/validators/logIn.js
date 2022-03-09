import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string().required('Email is required')
        .min(2, 'Invalid email').email('Invalid email'),
    password: Yup.string().required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(20, 'Password must be not exceed 20 characters')
})
export default validationSchema;