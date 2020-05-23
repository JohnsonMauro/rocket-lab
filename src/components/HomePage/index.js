import React, { useCallback, useEffect, useState } from 'react';

import TitlePage from '@components/common/TitlePage';
import Button from '@components/common/Form/Button';
import Section from '@components/common/Section';
import CheckBox from '@components/common/Form/CheckBox';
import Label from '@components/common/Form/Label';
import Input from '@components/common/Form/Input';
import Select from '@components/common/Form/Select';
import TextArea from '@components/common/Form/TextArea';
import Modal from '@components/common/Modal';

import { HomePageStyles, InputContainer, InputGroup, InfoContainer, InfoGroup } from './styles';
import { EmailValidate } from '@utils/validations';
import { PhoneMask, PostCodeMask } from '@utils/masks';
import { mockSelectState } from './mocks';
import FormStructure from './formStructure';

const HomePage = () => {
  const [form, setForm] = useState(FormStructure);
  const [modal, setVisible] = useState(false);
  const [phoneMask, setPhoneMask] = useState('');
  const [postCodeMask, setPostCodeMask] = useState('');

  useEffect(() => {
    setVisible(false);
  }, [modal]);

  const handlePhoneMask = (e) => {
    setPhoneMask(PhoneMask(e.target.value));
  };

  const handlePostCodeMask = (e) => {
    setPostCodeMask(PostCodeMask(e.target.value));
  };

  const handleFormChange = (key) =>
    useCallback(
      ({ target: { value } }) => {
        setForm({
          ...form,
          success: false,
          [key]: {
            value,
          },
        });
      },
      [form]
    );

  const setError = (error) => {
    const formData = error.reduce(
      (acc, current) => ({
        ...acc,
        [current[0]]: {
          value: form[current[0]].value,
          error: current[1],
        },
      }),
      {}
    );

    setForm({
      ...form,
      ...formData,
    });
  };

  const handleSubmit = () => (e) => {
    const error = [];
    e.preventDefault();

    if (!form.firstName.value) {
      error.push(['firstName', 'Please provide your first name!']);
    }

    if (!form.lastName.value) {
      error.push(['lastName', 'Please provide your last name!']);
    }

    // if (!form.email.value) {
    //   error.push(['email', 'Please provide your email!']);
    // } else if (!validateEmail(form.email.value)) {
    //   error.push(['email', 'Please provide a valid email']);
    // }

    // if (!form.fullName.value) {
    //   error.push(['fullName', 'Please provide your full name!']);
    // }

    if (error.length) return setError(error);
  };

  return (
    <HomePageStyles>
      <form onSubmit={handleSubmit()}>
        <TitlePage
          title="Create Contact"
          buttons={
            <>
              <Button type="reset" variant="secondary">
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </>
          }
        ></TitlePage>

        <Section title="Contact Information">
          <InputContainer>
            <InputGroup>
              <Label forControl="firstName">First Name</Label>
              <Input
                type="text"
                id="firstName"
                maxLength="3"
                minLength="15"
                name="firstName"
                placeholder="First Name"
                onChange={handleFormChange('firstName')}
                error={form.firstName.error}
              />
            </InputGroup>
            <InputGroup>
              <Label forControl="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                maxLength="3"
                minLength="15"
                name="lastName"
                placeholder="Last Name"
                onChange={handleFormChange('lastName')}
                error={form.lastName.error}
              />
            </InputGroup>
          </InputContainer>
          <InputContainer>
            <InputGroup>
              <Label forControl="accountName">Account Name</Label>
              <Input
                type="text"
                id="accountName"
                maxLength="3"
                minLength="50"
                name="accountName"
                placeholder="Account Name"
              />
            </InputGroup>
            <InputGroup>
              <Label forControl="companyName">Company Name</Label>
              <Input
                type="text"
                id="companyName"
                maxLength="3"
                minLength="50"
                name="companyName"
                placeholder="Company Name"
              />
            </InputGroup>
          </InputContainer>
          <InputContainer>
            <InputGroup>
              <Label forControl="phone">Phone</Label>
              <Input
                type="text"
                id="phone"
                maxLength="13"
                minLength="13"
                name="phone"
                onChange={handlePhoneMask}
                placeholder="Phone"
                value={phoneMask}
              />
            </InputGroup>
            <InputGroup>
              <Label forControl="fax">Fax (optional)</Label>
              <Input
                type="text"
                id="fax"
                maxLength="3"
                minLength="50"
                name="fax"
                placeholder="Fax"
              />
            </InputGroup>
          </InputContainer>
          <InputContainer>
            <InputGroup>
              <Label forControl="title">Title (optional)</Label>
              <Input
                type="text"
                id="title"
                maxLength="3"
                minLength="50"
                name="title"
                placeholder="Title"
              />
            </InputGroup>
            <InputGroup>
              <Label forControl="email">Email</Label>
              <Input
                type="email"
                id="email"
                maxLength="50"
                minLength="7"
                name="email"
                placeholder="email@email.com"
              />
            </InputGroup>
          </InputContainer>
          <InputContainer>
            <CheckBox
              forControl="emailOptOut"
              id="emailOptOut"
              label="Email Opt Out"
              name="emailOptOut"
            ></CheckBox>
          </InputContainer>
        </Section>

        <Section title="Address Information">
          <InputContainer>
            <InputGroup>
              <Label forControl="numberAndStreet">Street No. & Street</Label>
              <Input
                type="text"
                id="numberAndStreet"
                maxLength="3"
                minLength="50"
                name="numberAndStreet"
                placeholder="103, Street Down"
              />
            </InputGroup>
            <InputGroup>
              <Label forControl="city">City</Label>
              <Input
                type="text"
                id="city"
                maxLength="3"
                minLength="50"
                name="city"
                placeholder="Sydney"
              />
            </InputGroup>
          </InputContainer>
          <InputContainer>
            <InputGroup>
              <Label forControl="state">State</Label>
              <Select
                options={mockSelectState}
                name="state"
                placeholder="Search State or territory"
              />
            </InputGroup>
            <InputGroup>
              <Label forControl="postcode">Postcode</Label>
              <Input
                type="text"
                id="postcode"
                maxLength="4"
                minLength="4"
                name="postcode"
                onChange={handlePostCodeMask}
                placeholder="2000"
                value={postCodeMask}
              />
            </InputGroup>
          </InputContainer>
        </Section>

        <Section title="Description Information">
          <InputContainer>
            <InputGroup>
              <Label forControl="description">Description</Label>
              <TextArea id="description" name="description" rows="13" />
            </InputGroup>
          </InputContainer>
        </Section>
      </form>

      {/* <Modal subTitle="The contact details have been saved" title="Saved" isInitiallyOpened={modal}>
      <Section title="Contact Information">
        <InfoContainer>
          <InfoGroup>
            <Label forControl="firstName">First Name</Label>
            <span>Johnson Mauro</span>
          </InfoGroup>
          <InfoGroup>
            <Label forControl="lastName">Last Name</Label>
            <span></span>
          </InfoGroup>
        </InfoContainer>
        <InfoContainer>
          <InfoGroup>
            <Label forControl="accountName">Account Name</Label>
            <span></span>
          </InfoGroup>
          <InfoGroup>
            <Label forControl="companyName">Company Name</Label>
            <span></span>
          </InfoGroup>
        </InfoContainer>
        <InfoContainer>
          <InfoGroup>
            <Label forControl="phone">Phone</Label>
            <span></span>
          </InfoGroup>
          <InfoGroup>
            <Label forControl="fax">Fax (optional)</Label>
            <span></span>
          </InfoGroup>
        </InfoContainer>
        <InfoContainer>
          <InfoGroup>
            <Label forControl="title">Title (optional)</Label>
            <span></span>
          </InfoGroup>
          <InfoGroup>
            <Label forControl="email">Email</Label>
            <span></span>
          </InfoGroup>
        </InfoContainer>
      </Section>

      <Section title="Address Information">
        <InfoContainer>
          <InfoGroup>
            <Label forControl="title">Street No. & Street</Label>
            <span></span>
          </InfoGroup>
          <InfoGroup>
            <Label forControl="email">City</Label>
            <span></span>
          </InfoGroup>
        </InfoContainer>
        <InfoContainer>
          <InfoGroup>
            <Label forControl="state">State</Label>
            <span></span>
          </InfoGroup>
          <InfoGroup>
            <Label forControl="email">Postcode</Label>
            <span></span>
          </InfoGroup>
        </InfoContainer>
      </Section>

      <Section title="Description Information">
        <InfoContainer>
          <InfoGroup>
            <Label forControl="description">Description</Label>
            <span></span>
          </InfoGroup>
        </InfoContainer>
      </Section>
    </Modal> */}
    </HomePageStyles>
  );
};

export default HomePage;
