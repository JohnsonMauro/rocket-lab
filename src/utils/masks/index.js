const PhoneMask = (phone) => {
  const regex = /^([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{2})$/;

  let str = phone.replace(/[^0-9]/g, '').slice(0, 10);

  return (phone = str.replace(regex, '$1 $2 $3 $4'));
};

const PostCodeMask = (postCode) => {
  const regex = /^([0-9]{4})$/;

  let str = postCode.replace(/[^0-9]/g, '').slice(0, 4);

  return (postCode = str.replace(regex, '$1'));
};

export { PhoneMask, PostCodeMask };
