import React, { useState } from "react";
import { Container, Box, Grid } from "@mui/material";
import MedicationCompetencyForm from "./MedicationCompetencyForm";
import HistoricalAssessments from "./HistoricalAssessments";

function App() {
  const [archivedForms, setArchivedForms] = useState([]);
  const [currentForm, setCurrentForm] = useState({});
  const [firstSignatureLocked, setFirstSignatureLocked] = useState(false);
  const [secondSignatureAdded, setSecondSignatureAdded] = useState(false);

  const handleFormSubmit = (completedForm) => {
    setArchivedForms([...archivedForms, completedForm]);
    setSecondSignatureAdded(true);
  };

  const handleUnlockEdit = () => {
    setFirstSignatureLocked(false);
    setSecondSignatureAdded(false);
  };

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <MedicationCompetencyForm
              currentForm={currentForm}
              setCurrentForm={setCurrentForm}
              firstSignatureLocked={firstSignatureLocked}
              setFirstSignatureLocked={setFirstSignatureLocked}
              secondSignatureAdded={secondSignatureAdded}
              onFormSubmit={handleFormSubmit}
              onUnlockEdit={handleUnlockEdit}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <HistoricalAssessments archivedForms={archivedForms} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
