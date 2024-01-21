import * as yup from 'yup';
import {InferType} from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const contactFormSchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().matches(phoneRegExp, { message: 'Your phone number must be in the following format xxx-xxx-xxxx' }).required(),
    message: yup.string().required(),
  })
  .required();

export type ContactFormType = InferType<typeof contactFormSchema>;

export default contactFormSchema;