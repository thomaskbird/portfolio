import {TestimonyType} from "@/types/TestimonyType";
import {collectionTestimonials, firestoreDb} from "@/services/firebase";
import {query} from "@firebase/database";
import {doc, getDoc} from "@firebase/firestore";

const retrieveTestimony = async (id: string): Promise<TestimonyType> => {
  const queryTestimony = doc(
    firestoreDb,
    'testimonials',
    id
  );

  const docSnap: any = await getDoc(queryTestimony);

  if(docSnap.exists()) {
    return Promise.resolve({
      ...docSnap.data(),
      id: docSnap.id
    });
  } else {
    return Promise.reject('Document not found');
  }
}

export default retrieveTestimony;
