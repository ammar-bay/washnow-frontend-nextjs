import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import styles from "./style.module.scss";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const AlertDialogSlide: React.FC<IProps> = ({ open, setOpen, children }) => {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogActions>
          <img
            onClick={() => setOpen(false)}
            className="frame-15"
            alt="Frame"
            src="/img/frame-5447.svg"
            style={{ cursor: "pointer" }}
          />
        </DialogActions>
        <DialogContent
          style={{
            paddingTop: 0,
          }}
        >
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AlertDialogSlide;
