import { Box, Typography } from "@mui/material"
import { IoAlertCircle } from "react-icons/io5";
import Alert from '@mui/material/Alert';

interface Props {
    message: string
}
const AlertModal : React.FC<Props> = ({message}) =>{
    return (
        <Box  position={"fixed"}  top={20} right={20} left={30} display={"flex"}  gap={1} justifyContent={'center'} > 
        <Alert sx={{bgcolor:"#2d2d2d", color:"white"}} icon={<IoAlertCircle color="white" />} severity="success">
          <Box display={"flex"}  justifyContent={"space-between"} gap={1} width={300}>
            <Typography>
              {message}
            </Typography>
            <Typography>
              OK!
            </Typography>
          </Box>
        </Alert>
      </Box>

    )
}

export default AlertModal