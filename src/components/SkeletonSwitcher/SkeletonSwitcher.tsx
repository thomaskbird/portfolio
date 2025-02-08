import {ReactNode} from "react";
import {Skeleton} from "@mui/material";
import {SkeletonOwnProps} from "@mui/material/Skeleton/Skeleton";
import {useGlobalStore} from "@/store/useGlobalStore";

type SkeletonSwitcherType = SkeletonOwnProps & {
  item: ReactNode;
  skeletonProps?: SkeletonOwnProps;
};

const SkeletonSwitcher = ({
  item,
  skeletonProps = {}
}: SkeletonSwitcherType) => {
  return false ? <Skeleton {...skeletonProps} /> : item;
};

export default SkeletonSwitcher;
