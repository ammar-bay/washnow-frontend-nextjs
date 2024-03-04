import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./styles.module.scss";

export default function BasicAccordion({ text }) {
  return (
    <div className={styles.accordion}>
      <Accordion elevation={0}>
        <AccordionSummary
          //   expandIcon={<AddIcon />}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{text}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In order to accept bookings using our website, you must pass a
            background check. <br />
            Washers must present us with a valid driver&#39;s license and be
            checked for criminal records. <br />
            Additionally, they are screened for proper materials, equipment, and
            washing experience.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr />
    </div>
  );
}
