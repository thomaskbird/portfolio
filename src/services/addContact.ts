import ContactType from "@/types/ContactType";
import {addDoc, Timestamp} from "@firebase/firestore";
import moment from "moment";
import config from "@/config/sites";
import {collectionContacts} from "@/services/firebase";

const addContact = async (data: ContactType) => {
  const dateTimeStamp = moment(Timestamp.now().toDate()).format(config.momentFormat);
  const contact: ContactType = {
    ...data,
    status: 'unread',
    created_at: dateTimeStamp,
    updated_at: dateTimeStamp,
    deleted_at: null,
  };

  const contactRef = await addDoc(collectionContacts, contact);

  return Promise.resolve(contactRef);
};

export default addContact;