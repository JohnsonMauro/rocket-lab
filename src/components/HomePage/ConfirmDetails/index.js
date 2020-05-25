import Modal from '@components/common/Modal';
import Section from '@components/common/Section';
import Label from '@components/common/Form/Label';
import Check from '@svg/check.svg';

import { InfoContainer, InfoGroup } from './styles';

const ConfirmDetails = ({ details, open }) => {
  return (
    <Modal
      icon={Check}
      subTitle="The contact details have been saved"
      title="Saved"
      initialOpened={open}
    >
      {!!details && (
        <>
          <Section title="Contact Information">
            <InfoContainer>
              <InfoGroup>
                <Label forControl="firstName">First Name</Label>
                <span>{details.firstName}</span>
              </InfoGroup>
              <InfoGroup>
                <Label forControl="lastName">Last Name</Label>
                <span>{details.lastName}</span>
              </InfoGroup>
            </InfoContainer>
            <InfoContainer>
              <InfoGroup>
                <Label forControl="accountName">Account Name</Label>
                <span>{details.accountName}</span>
              </InfoGroup>
              <InfoGroup>
                <Label forControl="companyName">Company Name</Label>
                <span>{details.companyName}</span>
              </InfoGroup>
            </InfoContainer>
            <InfoContainer>
              <InfoGroup>
                <Label forControl="phone">Phone</Label>
                <span>{details.phone}</span>
              </InfoGroup>
              <InfoGroup>
                <Label forControl="fax">Fax (optional)</Label>
                <span>{details.fax}</span>
              </InfoGroup>
            </InfoContainer>
            <InfoContainer>
              <InfoGroup>
                <Label forControl="title">Title (optional)</Label>
                <span>{details.title}</span>
              </InfoGroup>
              <InfoGroup>
                <Label forControl="email">Email</Label>
                <span>{details.email}</span>
              </InfoGroup>
            </InfoContainer>
          </Section>

          <Section title="Address Information">
            <InfoContainer>
              <InfoGroup>
                <Label forControl="title">Street No. & Street</Label>
                <span>{details.numberAndStreet}</span>
              </InfoGroup>
              <InfoGroup>
                <Label forControl="city">City</Label>
                <span>{details.city}</span>
              </InfoGroup>
            </InfoContainer>
            <InfoContainer>
              <InfoGroup>
                <Label forControl="state">State</Label>
                <span>{details.state}</span>
              </InfoGroup>
              <InfoGroup>
                <Label forControl="postcode">Postcode</Label>
                <span>{details.postcode}</span>
              </InfoGroup>
            </InfoContainer>
          </Section>

          <Section title="Description Information">
            <InfoContainer>
              <InfoGroup>
                <Label forControl="description">Description</Label>
                <span>{details.description}</span>
              </InfoGroup>
            </InfoContainer>
          </Section>
        </>
      )}
    </Modal>
  );
};

export default ConfirmDetails;
