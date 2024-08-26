import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from "@mui/material/DialogContent";
import RegistrationForm from "../UI/RegistrartionForm";

export const BookNow = ({ open, handleClose, selectedPlan }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogContent>
        <RegistrationForm handleClose={handleClose} selectedPlan={selectedPlan} />
      </DialogContent>
    </Dialog>
  );
};

