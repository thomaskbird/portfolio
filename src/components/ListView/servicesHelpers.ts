import {getDocs, QuerySnapshot} from "@firebase/firestore";
import {queryAllServicesOrdered} from "@/services/firebase";
import {makeArrayFromSnapshot} from "@/utils/makeArrayFromSnapshot";
import {ServiceType} from "@/types/ServiceType";

const retrieveAllServices = async (): Promise<ServiceType[]> => {
  const servicesSnapshot: QuerySnapshot = await getDocs(queryAllServicesOrdered as any);
  const servicesRecordsFromDb = makeArrayFromSnapshot<ServiceType>(servicesSnapshot as any);

  return servicesRecordsFromDb;
};

export default retrieveAllServices;