import React, { useState, useEffect } from 'react';
import { Button, Modal, Box } from '@mui/material';
import ModalDelete from './produk/delete';
import ModalUpdate from './produk/update';
import ModalUbahStok from './produk/ubahStok';
import ModalUbahHarga from './produk/ubahHarga';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400, 
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface ModalAlertProps {
  openModal: boolean;
  onClose: () => void;
  showModalEdit: boolean;
  showModalDelete: boolean;
  showModalUbahStok: boolean;
  showModalUbahHarga: boolean;
}

enum ActionModal {
  None = '',
  Edit = "edit",
  Delete = "delete",
  UbahStok = "ubahStok",
  UbahHarga = "ubahHarga"
}


const ModalAlert: React.FC<ModalAlertProps> = ({ 
    openModal, 
    onClose,
    showModalEdit = false, 
    showModalDelete = false,
    showModalUbahStok = false,
    showModalUbahHarga = false
  }) => {
  const [open, setOpen] = useState(false);
    const [actionModal, setActionModal] = useState<ActionModal>(ActionModal.None)

    useEffect(() => {
      setOpen(openModal);
    }, [openModal]);

    const handleClose = () => {
      setOpen(false);
      onClose();
      setActionModal(ActionModal.None)
  };

  const handleActionModal = (type: ActionModal) => {
    setOpen(true)
    setActionModal(type)
  }

  return (
    <div>
      {showModalEdit && <Button onClick={() => handleActionModal(ActionModal.Edit)}>Edit</Button>}
      {showModalDelete && <Button onClick={() => handleActionModal(ActionModal.Delete)}>Delete</Button>}
      {showModalUbahStok && <Button onClick={() => handleActionModal(ActionModal.UbahStok)}>Ubah Stok</Button>}
      {showModalUbahHarga && <Button onClick={() => handleActionModal(ActionModal.UbahHarga)}>Ubah Harga</Button>}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            {actionModal ===  ActionModal.Edit && <ModalUpdate/>}
            {actionModal ===  ActionModal.Delete && <ModalDelete/>}
            {actionModal === ActionModal.UbahStok && <ModalUbahStok/>}
            {actionModal === ActionModal.UbahHarga && <ModalUbahHarga/>}
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAlert;
