import styles from "@/app/page.module.scss";
import {Container} from "@mui/material";

type SectionContainerType = {
  children: any;
  styleName?: any;
};

const SectionContainer = ({
  children,
  styleName,
}: SectionContainerType) => {
  return (
    <Container maxWidth={false} disableGutters className={styleName}>
      <Container>
        {children}
      </Container>
    </Container>
  )
}

export default SectionContainer;