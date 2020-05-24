import React, { useEffect, useState } from 'react';

import { Formik, Form } from 'formik';

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
import { FormStructure, YupValidations } from './formStructure';

const HomePage = () => {
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

  return (
    <HomePageStyles>
      <Formik
        initialValues={FormStructure}
        validationSchema={YupValidations}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setVisibleModal(true);
          setModalData(values);
          resetForm();
          setSubmitting();
        }}
      >
        <Form>
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
                <InputSelect
                  type="text"
                  id="firstName"
                  maxLength="20"
                  minLength="3"
                  name="firstName"
                  placeholder="First Name"
                  options={mockSelectTitles}
                  selectName="personTitle"
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
                  maxLength="50"
                  minLength="10"
                  name="numberAndStreet"
                  placeholder="103, Street Down"
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
                  placeholder="2000"
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
                />
              </InputGroup>
            </InputContainer>
          </Section>
        </Form>
      </Formik>

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
                  <span>{modalData.firstName}</span>
                </InfoGroup>
                <InfoGroup>
                  <Label forControl="lastName">Last Name</Label>
                  <span>{modalData.lastName}</span>
                </InfoGroup>
              </InfoContainer>
              <InfoContainer>
                <InfoGroup>
                  <Label forControl="accountName">Account Name</Label>
                  <span>{modalData.accountName}</span>
                </InfoGroup>
                <InfoGroup>
                  <Label forControl="companyName">Company Name</Label>
                  <span>{modalData.companyName}</span>
                </InfoGroup>
              </InfoContainer>
              <InfoContainer>
                <InfoGroup>
                  <Label forControl="phone">Phone</Label>
                  <span>{modalData.phone}</span>
                </InfoGroup>
                <InfoGroup>
                  <Label forControl="fax">Fax (optional)</Label>
                  <span>{modalData.fax}</span>
                </InfoGroup>
              </InfoContainer>
              <InfoContainer>
                <InfoGroup>
                  <Label forControl="title">Title (optional)</Label>
                  <span>{modalData.title}</span>
                </InfoGroup>
                <InfoGroup>
                  <Label forControl="email">Email</Label>
                  <span>{modalData.email}</span>
                </InfoGroup>
              </InfoContainer>
            </Section>

            <Section title="Address Information">
              <InfoContainer>
                <InfoGroup>
                  <Label forControl="title">Street No. & Street</Label>
                  <span>{modalData.numberAndStreet}</span>
                </InfoGroup>
                <InfoGroup>
                  <Label forControl="city">City</Label>
                  <span>{modalData.city}</span>
                </InfoGroup>
              </InfoContainer>
              <InfoContainer>
                <InfoGroup>
                  <Label forControl="state">State</Label>
                  <span>{modalData.state}</span>
                </InfoGroup>
                <InfoGroup>
                  <Label forControl="postcode">Postcode</Label>
                  <span>{modalData.postcode}</span>
                </InfoGroup>
              </InfoContainer>
            </Section>

            <Section title="Description Information">
              <InfoContainer>
                <InfoGroup>
                  <Label forControl="description">Description</Label>
                  <span>{modalData.description}</span>
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
