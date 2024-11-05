import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
} from "@mui/material";

function MedicationCompetencyForm({
  currentForm,
  setCurrentForm,
  firstSignatureLocked,
  setFirstSignatureLocked,
  secondSignatureAdded,
  onFormSubmit,
  onUnlockEdit,
}) {
  const handleInputChange = (e) => {
    setCurrentForm({ ...currentForm, [e.target.name]: e.target.value });
  };

  const handleFirstSignatureSubmit = () => {
    setFirstSignatureLocked(true);
  };

  const handleSecondSignatureSubmit = () => {
    onFormSubmit(currentForm);
  };

  return (
    <div>
      <Typography
        variant="h6"
        align="left"
        gutterBottom
        sx={{ position: "relative" }}
      >
        Ravi's Competency
      </Typography>
      <Card
        variant="outlined"
        sx={{
          padding: "20px",
          backgroundColor: "#9dc183",
        }}
      >
        <CardContent>
          {/* Edit Button */}
          {firstSignatureLocked && (
            <Button
              variant="contained"
              color="secondary"
              onClick={onUnlockEdit}
              sx={{ position: "absolute", top: 16, right: 20 }}
            >
              Edit
            </Button>
          )}

          {/* Section 1: Training and Policy */}
          <Typography variant="h6" gutterBottom>
            Training and Policy
          </Typography>
          <FormControl component="fieldset" fullWidth>
            {[
              "Has the member of staff completed training on the safe handling of medicines?",
              "Has the member of staff read the medication policy and signed to indicate that they have done so?",
              "Does the member of staff know how to access the medication policy if they wish to check any information?",
            ].map((label, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <FormLabel component="legend">{label}</FormLabel>
                <RadioGroup
                  row
                  name={`policyQuestion${index + 1}`}
                  value={currentForm[`policyQuestion${index + 1}`] || ""}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio color="primary" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio color="secondary" />}
                    label="No"
                  />
                </RadioGroup>
              </div>
            ))}
          </FormControl>

          <Divider sx={{ my: 2 }} />

          {/* Section 2: Administration of Medicines */}
          <Typography variant="h6" gutterBottom>
            Administration of Medicines
          </Typography>
          <Typography
            variant="h7"
            sx={{ marginBottom: "16px", fontSize: "18px" }}
          >
            Preparation and hygiene
          </Typography>
          <FormControl component="fieldset" fullWidth>
            {[
              "Did the member of staff wash their hands before starting to administer any medication and follow appropriate hygiene measures throughout the medication round?",
              "Did the member of staff make sure that everything was properly prepared before starting the medication round?",
            ].map((label, index) => (
              <div key={index} style={{ marginTop: "10px" }}>
                <FormLabel component="legend">{label}</FormLabel>
                <RadioGroup
                  row
                  name={`hygieneQuestion${index + 1}`}
                  value={currentForm[`hygieneQuestion${index + 1}`] || ""}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio color="primary" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio color="secondary" />}
                    label="No"
                  />
                </RadioGroup>
              </div>
            ))}
          </FormControl>

          <Divider sx={{ my: 2 }} />

          {/* Section 3: Signature Collection */}
          <Typography variant="h6" gutterBottom>
            Signature Collection
          </Typography>
          <Grid container spacing={2} alignItems="center">
            {/* First Signature */}
            <Grid item xs={6}>
              <TextField
                label="First Admin Name"
                name="firstAdminName"
                value={currentForm.firstAdminName || ""}
                onChange={handleInputChange}
                disabled={firstSignatureLocked}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="First Admin Date"
                type="date"
                name="firstAdminDate"
                value={currentForm.firstAdminDate || ""}
                onChange={handleInputChange}
                disabled={firstSignatureLocked}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            {!firstSignatureLocked && (
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleFirstSignatureSubmit}
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Submit First Signature
                </Button>
              </Grid>
            )}

            {/* Second Signature */}
            {firstSignatureLocked && (
              <>
                <Grid item xs={6}>
                  <TextField
                    label="Second Admin Name"
                    name="secondAdminName"
                    value={currentForm.secondAdminName || ""}
                    onChange={handleInputChange}
                    disabled={secondSignatureAdded}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Second Admin Date"
                    type="date"
                    name="secondAdminDate"
                    value={currentForm.secondAdminDate || ""}
                    onChange={handleInputChange}
                    disabled={secondSignatureAdded}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                {!secondSignatureAdded && (
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleSecondSignatureSubmit}
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      Submit Second Signature
                    </Button>
                  </Grid>
                )}
              </>
            )}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default MedicationCompetencyForm;
