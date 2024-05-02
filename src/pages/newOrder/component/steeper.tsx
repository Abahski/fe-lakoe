import  { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Pembayaran Terverifikasi',
    description: `Sab, 10 Agu 2023 - 20:00 WIB`,
  },
  {
    label: 'Pesanan DiBuat',
    description: 'Sab, 10 Agu 2023 - 20:00 WIB',
  },
];

const ListOrder = () => {
  const [activeStep, setActiveStep] = useState(-1);

  const handleStepClick = (index:any) => {
    setActiveStep(activeStep === index ? -1 : index);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel onClick={() => handleStepClick(index)}>{step.label}</StepLabel>
            {activeStep === index && (
              <StepContent>
                <Typography>{step.description}</Typography>
              </StepContent>
            )}
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default ListOrder;
