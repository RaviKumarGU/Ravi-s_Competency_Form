import React from "react";
import { Paper, Typography, List, ListItem, Box } from "@mui/material";
import Button from "@mui/material/Button";

function HistoricalAssessments({ archivedForms }) {
  return (
    <Box mt={4}>
      <Button
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: "#1976d2",
          color: "#fff",
          padding: "10px 20px",
          fontSize: "16px",
        }}
      >
        Historical Assessments
      </Button>
      <List>
        {archivedForms.map((form, index) => (
          <ListItem key={index} disableGutters>
            <Paper
              variant="outlined"
              style={{ padding: "15px", width: "100%" }}
            >
              <Typography variant="h6" color="primary">
                Form {index + 1}
              </Typography>
              <Typography variant="body1">
                Training Completed:{" "}
                {form.policyQuestion1 === "yes" ? "Yes" : "No"}
              </Typography>
              <Typography variant="body1">
                First Admin: {form.firstAdminName} - Date: {form.firstAdminDate}
              </Typography>
              <Typography variant="body1">
                Second Admin: {form.secondAdminName} - Date:{" "}
                {form.secondAdminDate}
              </Typography>
            </Paper>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default HistoricalAssessments;
