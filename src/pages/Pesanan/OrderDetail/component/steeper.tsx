import React, { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { timelineItemClasses } from '@mui/lab/TimelineItem';

interface IStatus {
  status: string | undefined;
}

const stepsByStatus: Record<string, Array<{ label: string; description: string }>> = {
  belumdibayar: [
    {
      label: 'Pesanan Dibuat',
      description: 'Sab, 10 Agu 2023 - 14:00 WIB',
    },
  ],
  pesananbaru: [
    {
      label: 'Pembayaran Terverifikasi',
      description: `Sab, 10 Agu 2023 - 14:12 WIB`,
    },
    {
      label: 'Pesanan Dibuat',
      description: 'Sab, 10 Agu 2023 - 14:00 WIB',
    },
  ],
  siapdikirim: [
    {
      label: 'Pesanan Diproses',
      description: `Sab, 10 Agu 2023 - 15:00 WIB`,
    },
    {
      label: 'Pembayaran Terverifikasi',
      description: `Sab, 10 Agu 2023 - 14:12 WIB`,
    },
    {
      label: 'Pesanan Dibuat',
      description: 'Sab, 10 Agu 2023 - 14:00 WIB',
    },
  ],
  dalampengiriman: [
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
      label: 'Pesanan Dibuat',
      description: 'Sab, 10 Agu 2023 - 14:00 WIB',
    },
  ],
  pesananselesai: [
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
      label: 'Pesanan Dibuat',
      description: 'Sab, 10 Agu 2023 - 14:00 WIB',
    },
  ],
  dibatalkan: [
    {
      label: 'Pembtalan Otomatis',
      description: 'Sab, 10 Agu 2023 - 18:00 WIB',
    },
    {
      label: 'Pesanan Dibuat',
      description: 'Sab, 10 Agu 2023 - 14:00 WIB',
    },
  ],
};

const ListOrderCompleted = ({ status }: IStatus) => {
  const steps = stepsByStatus[status || ''] || [];
  const [firstStep, setFirstStep] = useState(true); 

  return (
    <Timeline sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 } }}>
      {steps.map((step, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
          
            <TimelineDot color={firstStep && index === 0 ? 'primary' : undefined} />
            {index < steps.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Typography>{step.label}</Typography>
            <Typography>{step.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ListOrderCompleted;
