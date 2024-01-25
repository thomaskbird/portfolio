import {StyledEngineProvider} from "@mui/material";
import {ReactNode} from "react";

export type GlobalCssPriorityType = {
  children: ReactNode;
}

const GlobalCssPriority = ({ children }: GlobalCssPriorityType) => {
  return (
    <StyledEngineProvider injectFirst>
      {children}
    </StyledEngineProvider>
  )
}

export default GlobalCssPriority;