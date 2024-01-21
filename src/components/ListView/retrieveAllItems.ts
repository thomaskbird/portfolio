import {getDocs, QuerySnapshot} from "@firebase/firestore";
import {makeArrayFromSnapshot} from "@/utils/makeArrayFromSnapshot";

import {queryAllContentOrdered, queryAllServicesOrdered} from "@/services/firebase";

type QueryType = 'content' | 'services' | 'work';

const mappings = {
  blog: 'content',
  services: 'services',
  work: 'work',
}

const retrieveAllItems = async <T,>(type: QueryType): Promise<T[]> => {
  let query = null;
  const mappedType = mappings[type];

  switch(mappedType) {
    case 'content':
      query = queryAllContentOrdered;
    case 'services':
      query = queryAllServicesOrdered;
    default:
      query = undefined;
  }

  const itemsSnapshot: QuerySnapshot = await getDocs(query);
  return makeArrayFromSnapshot<T>(itemsSnapshot);
};

export default retrieveAllItems;