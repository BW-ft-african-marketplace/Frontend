import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required("Please Enter an Username"),
    password: yup
        .string()
        .trim()
        .required("You must enter ypur password")
});

export default formSchema;