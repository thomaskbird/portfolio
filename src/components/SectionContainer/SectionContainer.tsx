import styles from "@/app/page.module.scss";
import {Container} from "@mui/material";

type SectionContainerType = {
  children: any;
  styleName?: any;
  innerStyles?: any;
};

const SectionContainer = ({
  children,
  styleName,
  innerStyles,
}: SectionContainerType) => {
  return (
    <Container maxWidth={false} disableGutters className={styleName}>
      <Container className={innerStyles}>
        {children}
      </Container>
    </Container>
  )
}

export default SectionContainer;
