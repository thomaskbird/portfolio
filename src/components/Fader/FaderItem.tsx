import styles from "@/components/Fader/Fader.module.scss";
import Typography from "@mui/material/Typography";
import cn from "classnames";

type FaderItemType = {
  active: boolean;
  title: string;
  content: string;
}

const FaderItem = ({
  active,
  title,
  content,
}: FaderItemType) => {
  return (
    <div className={cn(styles.faderItem, active && styles.active)}>
      <Typography
        variant="body2"
        className={styles.fadeText}
        dangerouslySetInnerHTML={{
          __html: `<em>${title}:</em> ${content}`
        }}
      />
    </div>
  )
}

export default FaderItem;
