const EmailValidate = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

const PostCodeValidate = (postCode) => {
  const regex = /^(0[289][0-9]{2})|([1-9][0-9]{3})$/;
  return regex.test(postCode);
};

export { EmailValidate, PostCodeValidate };
