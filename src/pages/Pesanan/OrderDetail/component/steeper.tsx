import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';


interface IStatus {
  status: string | undefined
}

const BelumDibayar = [
  {
    label: 'Pesanan DiBuat',
    description: 'Sab, 10 Agu 2023 - 14:00 WIB',
  },
];

const PesananBaru = [
  {
    label: 'Pembayaran Terverifikasi',
    description: `Sab, 10 Agu 2023 - 14:12 WIB`,
  },
  {
    label: 'Pesanan DiBuat',
    description: 'Sab, 10 Agu 2023 - 14:00 WIB',
  },
];

const SiapDikirim = [
  {
    label: 'Pesanan Diproses',
    description: `Sab, 10 Agu 2023 - 15:00 WIB`,
  },
  {
    label: 'Pembayaran Terverifikasi',
    description: `Sab, 10 Agu 2023 - 14:12 WIB`,
  },
  {
    label: 'Pesanan DiBuat',
    description: 'Sab, 10 Agu 2023 - 14:00 WIB',
  },
];

const DalamPengiriman = [
  {
    label: 'Produk Telah Dikirim',
    description: `Sab, 10 Agu 2023 - 20:00 WIB`,
  },
  {
    label: 'Pesanan Diproses',
    description: `Sab, 10 Agu 2023 - 15:00 WIB`,
  },
  {
    label: 'Pembayaran Terverifikasi',
    description: `Sab, 10 Agu 2023 - 14:12 WIB`,
  },
  {
    label: 'Pesanan DiBuat',
    description: 'Sab, 10 Agu 2023 - 14:00 WIB',
  },
];

const PesananSelesai = [
  {
    label: 'Produk Telah Diterima',
    description: `Sab, 12 Agu 2023 - 10:00 WIB`,
  },
  {
    label: 'Produk Telah Dikirim',
    description: `Sab, 10 Agu 2023 - 20:00 WIB`,
  },
  {
    label: 'Pesanan Diproses',
    description: `Sab, 10 Agu 2023 - 15:00 WIB`,
  },
  {
    label: 'Pembayaran Terverifikasi',
    description: `Sab, 10 Agu 2023 - 14:12 WIB`,
  },
  {
    label: 'Pesanan DiBuat',
    description: 'Sab, 10 Agu 2023 - 14:00 WIB',
  },
];
const Dibatalkan = [
  {
    label: 'Pembtalan Otomatis',
    description: 'Sab, 10 Agu 2023 - 18:00 WIB',
  },
  {
    label: 'Pesanan DiBuat',
    description: 'Sab, 10 Agu 2023 - 14:00 WIB',
  },
];

const ListOrder = ({ status }: IStatus) => {
  const [activeStep, setActiveStep] = useState(-1);

  const handleStepClick = (index: any) => {
    setActiveStep(activeStep === index ? -1 : index);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      {status === "belumdibayar" ?
        <Stepper activeStep={activeStep} orientation="vertical">
          {BelumDibayar.map((step, index) => (
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
        : status === "pesananbaru" ?
          <Stepper activeStep={activeStep} orientation="vertical">
            {PesananBaru.map((step, index) => (
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
          : status === "siapdikirim" ?
            <Stepper activeStep={activeStep} orientation="vertical">
              {SiapDikirim.map((step, index) => (
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
            : status === "dalampengiriman" ?
              <Stepper activeStep={activeStep} orientation="vertical">
                {DalamPengiriman.map((step, index) => (
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
              : status === "pesananselesai" ?
                <Stepper activeStep={activeStep} orientation="vertical">
                  {PesananSelesai.map((step, index) => (
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
                : status === "dibatalkan" ?
                  <Stepper activeStep={activeStep} orientation="vertical">
                    {Dibatalkan.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel onClick={() => handleStepClick(index)}>{step.label}</StepLabel>
                        {activeStep === index && (
                          <StepContent>
                            <Typography>{step.description}</Typography>
                          </StepContent>
                        )}
                      </Step>
                    ))}
                  </Stepper> : ""
      }
    </Box>
  );
};

export default ListOrder;
