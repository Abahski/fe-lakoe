import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import { Card, CardContent, CardMedia, CardHeader } from '@mui/material'



const ProductIndex = () => {
    return (
        <Box display={'flex'} gap={2} >
            <Box>
                <Card sx={{ maxWidth: 380, borderRadius: "18px" }}>
                    <CardMedia
                        sx={{ height: "auto" }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Box>
                            <img
                                src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                alt="image "
                                style={{
                                    objectFit: "cover",
                                    height: "186px",
                                    width: "100%",
                                    borderRadius: "18px",
                                }}
                            />
                        </Box>
                        <Box mt={1}>
                            <Typography variant="subtitle2" sx={{ fontWeight: "bolder" }} display="block" gutterBottom>
                                Top Notch Services
                            </Typography>
                            <Typography mt={1} variant='body2'>
                                The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer,
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}

export default ProductIndex
