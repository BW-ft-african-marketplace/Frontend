import * as yup from "yup";

const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&-])[A-Za-z\d@#$!%*?&-]{8,}$/;

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required("You need an Username for the Account")
        .min(3, "Username Must Be at Least 3 Characters in Length"),
    password: yup
        .string()
        .required("You must enter a Password")
        .matches( passwordRegExp, "Password must be eight characters, have at least one uppercase letter and one lowercase letter, one number, and one special character"),
    market_name: yup
        .string()
        .trim()
        .required("Please Enter a Market Name")
        .min(3, "Market Name Must Be at Least 3 Characters in Length"),
    tos: yup
        .boolean()
        .oneOf([true], "You must accept the Terms of Service"),
});

export default formSchema;