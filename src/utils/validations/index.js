const EmailValidateregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const OnlyNumberRegex = /([0-9])$/;

const PostCodeValidateRegex = /^(0[289][0-9]{2})|([1-9][0-9]{3})$/;

export { EmailValidateregex, OnlyNumberRegex, PostCodeValidateRegex };
