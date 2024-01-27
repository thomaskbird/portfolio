import {getDocs, orderBy, QuerySnapshot, where} from "@firebase/firestore";
import {collectionProjects} from "@/services/firebase";
import {makeArrayFromSnapshot} from "@/utils/makeArrayFromSnapshot";
import {query} from "@firebase/database";
import {ProjectType} from "@/types/ProjectType";

const retrieveProjects = async (): Promise<ProjectType[]> => {
  const queryProjects = (query as any)(
    collectionProjects,
    where('deletedAt', '==', null),
    orderBy("createdAt", "desc"),
  );

  const projectsSnapshot: QuerySnapshot = await getDocs(queryProjects as any);
  const projectsRecordsFromDb = makeArrayFromSnapshot<ProjectType>(projectsSnapshot as any);

  return projectsRecordsFromDb;
};

export default retrieveProjects;