import {QuerySnapshot} from "@firebase/firestore";

const getSingleItemFromSnapshot = (snap: QuerySnapshot) => {
  let post = undefined;

  snap.forEach(doc => {
    post = {
      id: doc.id,
      ...doc.data()
    }
  });

  return post;
}

export default getSingleItemFromSnapshot;