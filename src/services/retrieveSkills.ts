import {getDocs, orderBy, QuerySnapshot, where} from "@firebase/firestore";
import {collectionProjects, collectionSkills, collectionTestimonials} from "@/services/firebase";
import {makeArrayFromSnapshot} from "@/utils/makeArrayFromSnapshot";
import {query} from "@firebase/database";
import {TestimonyType} from "@/types/TestimonyType";
import {SkillType} from "@/types/SkillType";

const retrieveSkills = async (): Promise<SkillType[]> => {
  const querySkills = (query as any)(
    collectionSkills,
  );

  const skillsSnapshot: QuerySnapshot = await getDocs(querySkills as any);
  const skillsRecordsFromDb = makeArrayFromSnapshot<SkillType>(skillsSnapshot as any);

  return skillsRecordsFromDb;
};

export default retrieveSkills;