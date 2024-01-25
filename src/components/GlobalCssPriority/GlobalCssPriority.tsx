import { StyledEngineProvider } from '@mui/material/styles';
import {ReactNode} from "react";

type GlobalCssPriorityType = {
  children: ReactNode,
}

const GlobalCssPriority = ({ children }: GlobalCssPriorityType) => {
  return (
    <StyledEngineProvider injectFirst>
      {children}
    </StyledEngineProvider>
  );
}

export default GlobalCssPriority;