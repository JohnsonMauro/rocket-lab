import * as Yup from 'yup';

const FormStructure = {
  firstName: '',
  lastName: '',
  accountName: '',
  companyName: '',
  phone: '',
  fax: '',
  title: '',
  email: '',
  emailOptOut: false,
  numberAndStreet: '',
  city: '',
  state: '',
  postcode: '',
  description: '',
};

const YupValidations = Yup.object({
  firstName: Yup.string()
    .min(3, 'Must be at least 3 characters!')
    .max(20, 'Must be 20 characters or less!')
    .required('Please provide your first name!'),
  lastName: Yup.string()
    .min(3, 'Must be at least 3 characters!')
    .max(20, 'Must be 20 characters or less!')
    .required('Please provide your last name!'),
  accountName: Yup.string()
    .min(3, 'Must be at least 3 characters!')
    .max(50, 'Must be 50 characters or less!')
    .required('Please provide your account name!'),
  companyName: Yup.string()
    .min(3, 'Must be at least 3 characters!')
    .max(50, 'Must be 50 characters or less!')
    .required('Please provide your company name!'),
  phone: Yup.string()
    .matches(/([0-9])$/, 'Please provide a valid postcode!')
    .min(10, 'Phone number must be 10 digits!')
    .required('Please provide your phone number!'),
  fax: Yup.string()
    .min(3, 'Must be at least 3 characters!')
    .max(20, 'Must be 20 characters or less!'),
  title: Yup.string()
    .min(3, 'Must be at least 3 characters!')
    .max(20, 'Must be 20 characters or less!'),
  email: Yup.string()
    .email('Please provide a valid email!')
    .min(7, 'Must be at least 7 characters!')
    .max(50, 'Must be 50 characters or less!')
    .required('Please provide your e-mail!'),
  numberAndStreet: Yup.string()
    .min(10, 'Must be at least 10 characters!')
    .max(50, 'Must be 50 characters or less!')
    .required('Please provide your number and street!'),
  city: Yup.string()
    .min(3, 'Must be at least 3 characters!')
    .max(50, 'Must be 50 characters or less!')
    .required('Please provide your city!'),
  state: Yup.string().required('Please provide your state!'),
  postcode: Yup.string()
    .matches(/^(0[289][0-9]{2})|([1-9][0-9]{3})$/, 'Please provide a valid postcode!')
    .min(4, 'Must be 4 digits!')
    .required('Please provide your postcode!'),
  description: Yup.string()
    .min(2, 'Must be at least 2 characters!')
    .required('Please provide a description!'),
});

export { FormStructure, YupValidations };
