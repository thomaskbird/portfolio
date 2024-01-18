import {ResumeType} from "@/mocks/mockResume";
import styles from './ResumeItem.module.scss';
import {Card, CardContent, CardHeader} from "@mui/material";
import cn from "classnames";

type ResumeItemType = {
  item: ResumeType
};

const ResumeItem = ({
  item
}: ResumeItemType) => {

  return (
    <div className={cn(styles.resumeItem, item.id % 2 === 0 ? styles.resumeItemEven : styles.resumeItemOdd)}>
      <div className={styles.sticky}>
        <div className={styles.resumeItemLeft}>
          <h2>{item.company}</h2>
          <h4>{item.title}</h4>

          <ul>
            {item.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>

          <p>Skills: {item.skills.join(', ')}</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.resumeItemRight}>
          <h5>{item.from} to {item.to}</h5>
        </div>
      </div>
    </div>
  )
}

export default ResumeItem;