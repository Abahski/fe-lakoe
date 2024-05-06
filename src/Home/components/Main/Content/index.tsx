import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import { Button, Card, CardActions, CardContent, CardMedia, CardHeader, Avatar, IconButton } from '@mui/material'



const Content = () => {
    return (
        <Box display={'flex'} gap={2} px={15}>
            <Box display={'flex'} justifyContent={"center"} flexDirection={'column'} gap={2}>
                <Typography variant="h4" color="initial">
                    Working with us is a pleasure
                </Typography>
                <Typography variant="body1" color="initial">
                    Don't let your uses guess by attaching tooltips and popoves to any
                    element. Just make sure you enable them first via JavaScript.
                </Typography>
                <Box mt={3}>
                    <Typography variant="body2" color="initial">
                        The kit comes with three pre-built pages to help you get started faster.
                        You can change the text and images and you're good to go. Just make
                        sure you enable them first via JavaScript.
                    </Typography>
                </Box>
                <Box mt={3}>
                    <Button variant='contained' sx={{ backgroundColor: "black" }}>
                        Read More
                    </Button>
                </Box>
            </Box>
            <Box>
                <Card sx={{ maxWidth: 900, borderRadius: "18px" }}>
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
                                    height: "auto",
                                    width: "100%",
                                    borderRadius: "18px",
                                }}
                            />
                        </Box>
                        <Box mt={3}>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                Top Notch Services
                            </Typography>
                            <Typography mt={1}>
                                The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer,
                                and that process will continue whatever happens
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}

export default Content
