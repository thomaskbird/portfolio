import {getDocs, orderBy, QuerySnapshot, where} from "@firebase/firestore";
import {collectionProjects, collectionTestimonials} from "@/services/firebase";
import {makeArrayFromSnapshot} from "@/utils/makeArrayFromSnapshot";
import {query} from "@firebase/database";
import {TestimonyType} from "@/types/TestimonyType";

const retrieveTestimonys = async (): Promise<TestimonyType[]> => {
  const queryTestimonys = (query as any)(
    collectionTestimonials,
  );

  const testimonysSnapshot: QuerySnapshot = await getDocs(queryTestimonys as any);
  const testimonysRecordsFromDb = makeArrayFromSnapshot<TestimonyType>(testimonysSnapshot as any);

  return testimonysRecordsFromDb;
};

export default retrieveTestimonys;