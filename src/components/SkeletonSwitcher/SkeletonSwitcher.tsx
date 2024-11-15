import {ReactNode} from "react";
import {Skeleton} from "@mui/material";
import {SkeletonOwnProps} from "@mui/material/Skeleton/Skeleton";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectIsLoading} from "@/store/selectors/globalStore";

type SkeletonSwitcherType = SkeletonOwnProps & {
  item: ReactNode;
  skeletonProps?: SkeletonOwnProps;
};

const SkeletonSwitcher = ({
  item,
  skeletonProps = {}
}: SkeletonSwitcherType) => {
  const isLoading = useGlobalStore(selectIsLoading);
  return false ? <Skeleton {...skeletonProps} /> : item;
};

export default SkeletonSwitcher;
