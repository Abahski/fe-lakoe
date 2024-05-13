import { Box, Typography, Modal, Button } from '@mui/material';
import { BiCopy } from 'react-icons/bi';
import { FaTruckFast } from 'react-icons/fa6';
import AlertModal from '../../../../components/modalOrderDetails/alert';
import { useState } from 'react';
import ModalPesenan from '../../../../components/modalOrderDetails/modal';

interface OrderDetailsProps {
    addressText: string;
    resiText: string;
    phoneText: string[];
    fullnameText: string[];
    status: string | undefined;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ addressText, resiText, phoneText, fullnameText, status }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleCopyClick = () => {
        try {
            const textToCopy = `${addressText}\n${phoneText.join('\n')}\n${fullnameText.join('\n')}`;
            navigator.clipboard.writeText(textToCopy);
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
        } catch (error) {
            console.error('Gagal menyalin teks: ', error);
        }
    };

    return (
        <Box bgcolor={'#ffffff'} mt={0.5} p={1} borderRadius={3}>
            <Box display={'flex'} flexDirection={'column'} gap={0.5} px={2}>
                <Box display={'flex'} justifyContent={'space-between'} gap={1} alignItems={'center'}>
                   <Box display={'flex'} gap={1}>
                    <FaTruckFast color="#40a4c7" size={20} />
                    <Typography fontWeight="bold" fontSize={13}>
                        Detail Pengiriman
                    </Typography>
                    </Box>
                    {status === "dalampengiriman" || status === "pesananselesai" ? (
                    <Typography
                    fontSize={14}
                    fontWeight={"bold"}
                    color={
                            status === "dalampengiriman" ? "#40a4c7"
                                : status === "pesananselesai" ? "#40a4c7"
                                    : ""
                        }
                        onClick={handleOpenModal}>
                        Lacak Pengiriman
                    </Typography>
                ) : null}
                </Box>
                
                <Box ml={3}>
                    {status === "dalampengiriman" || status === "pesananselesai" ? (
                        <>
                            <Box display={'flex'} alignItems={'center'} gap={13}>
                                <Typography fontSize={14}>Kurir</Typography>
                                <Box display={'flex'} ml={5.5} alignItems={'start'}>
                                    <Typography fontSize={12}>JNE</Typography>
                                </Box>
                            </Box>
                            <Box display={'flex'} gap={13} alignItems={'center'}>
                                <Box onClick={() => handleCopyClick()} display={'flex'} alignItems={'center'} gap={1}>
                                    <Typography fontSize={14}>No.Resi</Typography>
                                    <BiCopy size={19} />
                                </Box>
                                <Box display={'flex'} alignItems={'center'} flex={1}>
                                    <Typography fontSize={13.5}>{resiText}</Typography>
                                </Box>
                            </Box>
                            {fullnameText.map((fullname, index) => (
                                <Box key={index} display={'flex'} gap={13} alignItems={'center'} onClick={() => handleCopyClick()}>
                                    <Box display={'flex'} alignItems={'center'} mt={-5} gap={1}>
                                        <Typography fontSize={14}>Alamat</Typography>
                                        <BiCopy size={19} />
                                    </Box>
                                    <Box display={'flex'} flexDirection={'column'} >
                                        <Typography fontSize={13.5} >{addressText}</Typography>
                                        <Typography fontSize={12} color={'grey'}>{phoneText[index]}</Typography>
                                        <Typography fontSize={12} color={'grey'}>{fullname}</Typography>
                                    </Box>
                                </Box>
                            ))}
                        </>
                    ) : null}
                </Box>
                {showAlert && <AlertModal message="Detail pengiriman telah berhasil disalin" />}
            </Box>
            {/* modal */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "white", p: 2, borderRadius: "5px", width: "50%" }}>
                    <ModalPesenan status={status} />
                </Box>
            </Modal>
        </Box>
    );
};

export default OrderDetails;
