import React, { useCallback, useEffect, useState } from 'react';

import TitlePage from '@components/common/TitlePage';
import Button from '@components/common/Form/Button';
import Section from '@components/common/Section';
import CheckBox from '@components/common/Form/CheckBox';
import Label from '@components/common/Form/Label';
import InputSelect from '@components/common/Form/InputSelect';
import Input from '@components/common/Form/Input';
import Select from '@components/common/Form/Select';
import TextArea from '@components/common/Form/TextArea';
import Modal from '@components/common/Modal';
import Check from '@svg/check.svg';

import { HomePageStyles, InputContainer, InputGroup, InfoContainer, InfoGroup } from './styles';

import { EmailValidate, PostCodeValidate } from '@utils/validations';
import { PhoneMask, PostCodeMask } from '@utils/masks';
import { mockSelectTitles, mockSelectState } from './mocks';
import FormStructure from './formStructure';

const HomePage = () => {
  const [form, setForm] = useState(FormStructure);
  const [modal, setVisibleModal] = useState(false);
  const [modalData, setModalData] = useState();
  const [phoneMask, setPhoneMask] = useState('');
  const [postCodeMask, setPostCodeMask] = useState('');

  useEffect(() => {
    setVisibleModal(false);
  }, [modal]);

  const handlePhoneMask = (e) => {
    setPhoneMask(PhoneMask(e.target.value));
  };

  const handlePostCodeMask = (e) => {
    setPostCodeMask(PostCodeMask(e.target.value));
  };

  const handleReset = () => {
    setForm(FormStructure);
  };

  const handleFormChange = (key) =>
    useCallback(
      ({ target: { value } }) => {
        setForm({
          ...form,
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

  const formValidate = () => {
    const error = [];

    if (!form.firstName.value) {
      error.push(['firstName', 'Please provide your first name!']);
    }

    if (!form.lastName.value) {
      error.push(['lastName', 'Please provide your last name!']);
    }

    if (!form.accountName.value) {
      error.push(['accountName', 'Please provide your account name!']);
    }

    if (!form.companyName.value) {
      error.push(['companyName', 'Please provide your Company Name!']);
    }

    if (!form.phone.value) {
      error.push(['phone', 'Please provide your phone!']);
    }

    if (!form.email.value) {
      error.push(['email', 'Please provide your email!']);
    } else if (!EmailValidate(form.email.value)) {
      error.push(['email', 'Please provide a valid email!']);
    }

    if (!form.numberAndStreet.value) {
      error.push(['numberAndStreet', 'Please provide your number and street!']);
    }

    if (!form.city.value) {
      error.push(['city', 'Please provide your city!']);
    }

    if (!form.state.value) {
      error.push(['state', 'Please provide your state!']);
    }

    if (!form.postcode.value) {
      error.push(['postcode', 'Please provide your postcode!']);
    } else if (!PostCodeValidate(form.postcode.value)) {
      error.push(['postcode', 'Please provide a valid postcode!']);
    }

    if (!form.description.value) {
      error.push(['description', 'Please provide a description!']);
    }

    if (error.length) return setError(error);

    return true;
  };

  const handleSubmit = () => (e) => {
    e.preventDefault();
    if (formValidate()) {
      setModalData(form);
      setVisibleModal(true);
      setForm(FormStructure);
    }
  };

  return (
    <HomePageStyles>
      <form onSubmit={handleSubmit()}>
        <TitlePage
          title="Create Contact"
          buttons={
            <>
              <Button type="reset" variant="secondary" onClick={handleReset}>
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
              <InputSelect
                options={mockSelectTitles}
                selectName="personTitle"
                type="text"
                id="firstName"
                maxLength="15"
                minLength="3"
                inputName="firstName"
                placeholder="First Name"
                onChange={handleFormChange('firstName')}
                error={form.firstName.error}
                value={form.firstName.value}
              ></InputSelect>
            </InputGroup>
            <InputGroup>
              <Label forControl="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                maxLength="15"
                minLength="3"
                name="lastName"
                placeholder="Last Name"
                onChange={handleFormChange('lastName')}
                error={form.lastName.error}
                value={form.lastName.value}
              />
            </InputGroup>
          </InputContainer>
          <InputContainer>
            <InputGroup>
              <Label forControl="accountName">Account Name</Label>
              <Input
                type="text"
                id="accountName"
                maxLength="50"
                minLength="3"
                name="accountName"
                placeholder="Account Name"
                onChange={handleFormChange('accountName')}
                error={form.accountName.error}
                value={form.accountName.value}
              />
            </InputGroup>
            <InputGroup>
              <Label forControl="companyName">Company Name</Label>
              <Input
                type="text"
                id="companyName"
                maxLength="50"
                minLength="3"
                name="companyName"
                placeholder="Company Name"
                onChange={handleFormChange('companyName')}
                error={form.companyName.error}
                value={form.companyName.value}
              />
            </InputGroup>
          </InputContainer>
          <InputContainer>
            <InputGroup>
              <Label forControl="phone">Phone</Label>
              <Input
                type="text"
                id="phone"
                maxLength="10"
                minLength="10"
                name="phone"
                placeholder="Phone"
                onChange={handleFormChange('phone')}
                error={form.phone.error}
                value={form.phone.value}
              />
            </InputGroup>
            <InputGroup>
              <Label forControl="fax">Fax (optional)</Label>
              <Input
                type="text"
                id="fax"
                maxLength="50"
                minLength="3"
                name="fax"
                placeholder="Fax"
                onChange={handleFormChange('fax')}
                value={form.fax.value}
              />
            </InputGroup>
          </InputContainer>
          <InputContainer>
            <InputGroup>
              <Label forControl="title">Title (optional)</Label>
              <Input
                type="text"
                id="title"
                maxLength="50"
                minLength="3"
                name="title"
                placeholder="Title"
                onChange={handleFormChange('title')}
                value={form.title.value}
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
                placeholder="sample@email.com"
                onChange={handleFormChange('email')}
                error={form.email.error}
                value={form.email.value}
              />
            </InputGroup>
          </InputContainer>
          <InputContainer>
            <CheckBox
              forControl="emailOptOut"
              id="emailOptOut"
              label="Email Opt Out"
              name="emailOptOut"
              onChange={handleFormChange('emailOptOut')}
              value={form.emailOptOut.value}
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
                maxLength="50"
                minLength="3"
                name="numberAndStreet"
                placeholder="103, Street Down"
                onChange={handleFormChange('numberAndStreet')}
                error={form.numberAndStreet.error}
                value={form.numberAndStreet.value}
              />
            </InputGroup>
            <InputGroup>
              <Label forControl="city">City</Label>
              <Input
                type="text"
                id="city"
                maxLength="50"
                minLength="3"
                name="city"
                placeholder="Sydney"
                onChange={handleFormChange('city')}
                error={form.city.error}
                value={form.city.value}
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
                onChange={handleFormChange('state')}
                error={form.state.error}
                value={form.state.value}
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
                placeholder="2000"
                onChange={handleFormChange('postcode')}
                error={form.postcode.error}
                value={form.postcode.value}
              />
            </InputGroup>
          </InputContainer>
        </Section>

        <Section title="Description Information">
          <InputContainer>
            <InputGroup>
              <Label forControl="description">Description</Label>
              <TextArea
                id="description"
                maxLength="2000"
                minLength="2"
                name="description"
                rows="13"
                onChange={handleFormChange('description')}
                error={form.description.error}
                value={form.description.value}
              />
            </InputGroup>
          </InputContainer>
        </Section>
      </form>

      <Modal
        icon={Check}
        subTitle="The contact details have been saved"
        title="Saved"
        initialOpened={modal}
      >
        {!!modalData && (
          <>
            <Section title="Contact Information">
              <InfoContainer>
                <InfoGroup>
                  <Label forControl="firstName">First Name</Label>
                  <span>{modalData.firstName.value}</span>
                </InfoGroup>
                <InfoGroup>
                  <Label forControl="lastName">Last Name</Label>
                  <span>{modalData.lastName.value}</span>
                </InfoGroup>
              </InfoContainer>
              <InfoContainer>
                <InfoGroup>
                  <Label forControl="accountName">Account Name</Label>
                  <span>{modalData.accountName.value}</span>
                </InfoGroup>
                <InfoGroup>
                  <Label forControl="companyName">Company Name</Label>
                  <span>{modalData.companyName.value}</span>
                </InfoGroup>
              </InfoContainer>
              <InfoContainer>
                <InfoGroup>
                  <Label forControl="phone">Phone</Label>
                  <span>{modalData.phone.value}</span>
                </InfoGroup>
                <InfoGroup>
                  <Label forControl="fax">Fax (optional)</Label>
                  <span>{modalData.fax.value}</span>
                </InfoGroup>
              </InfoContainer>
              <InfoContainer>
                <InfoGroup>
                  <Label forControl="title">Title (optional)</Label>
                  <span>{modalData.title.value}</span>
                </InfoGroup>
                <InfoGroup>
                  <Label forControl="email">Email</Label>
                  <span>{modalData.email.value}</span>
                </InfoGroup>
              </InfoContainer>
            </Section>

            <Section title="Address Information">
              <InfoContainer>
                <InfoGroup>
                  <Label forControl="title">Street No. & Street</Label>
                  <span>{modalData.numberAndStreet.value}</span>
                </InfoGroup>
                <InfoGroup>
                  <Label forControl="city">City</Label>
                  <span>{modalData.city.value}</span>
                </InfoGroup>
              </InfoContainer>
              <InfoContainer>
                <InfoGroup>
                  <Label forControl="state">State</Label>
                  <span>{modalData.state.value}</span>
                </InfoGroup>
                <InfoGroup>
                  <Label forControl="postcode">Postcode</Label>
                  <span>{modalData.postcode.value}</span>
                </InfoGroup>
              </InfoContainer>
            </Section>

            <Section title="Description Information">
              <InfoContainer>
                <InfoGroup>
                  <Label forControl="description">Description</Label>
                  <span>{modalData.description.value}</span>
                </InfoGroup>
              </InfoContainer>
            </Section>
          </>
        )}
      </Modal>
    </HomePageStyles>
  );
};

export default HomePage;
