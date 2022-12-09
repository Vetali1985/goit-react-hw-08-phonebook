import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Modal } from 'components/Modal/Modal';

import { Button } from 'components/App/App.styled';
import { Section } from 'components/Shared/Section.styled';

const Contacts = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>

      <Section>
        <div>
          {/* <ContactForm /> */}
          <Button type="button" onClick={toggleModal}>
            Add contact
          </Button>
          {showModal && (
            <Modal onClose={toggleModal}>
              <ContactForm onClose={toggleModal} />
            </Modal>
          )}
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          {error && <b>Ooops, something went wrong</b>}
          <ContactList />
        </div>
      </Section>
    </>
  );
};

export default Contacts;
