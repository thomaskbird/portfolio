import * as yup from 'yup';
import {InferType} from "yup";

const searchFormSchema = yup
  .object()
  .shape({
    query: yup.string().required(),
  })
  .required();

export type SearchFormType = InferType<typeof searchFormSchema>;

export default searchFormSchema;
