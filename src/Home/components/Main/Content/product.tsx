import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import { Card, CardContent, CardMedia } from '@mui/material'
import { IProduct } from '../../../../types/app'
import React from 'react'


interface ProductIndexProps {
    products: IProduct[]
}

const ProductIndex:React.FC<ProductIndexProps>  = ({ products }) => {
    return (
        <Box>
            <Box display={'flex'} justifyContent={"center"} flexDirection={'row'} gap={2}>
                {products.map((product) => (
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
                                    {product.name} - {product.size} {product.attachments}
                                </Typography>
                                <Typography mt={1} variant='body2'>
                                    {product.description}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}

export default ProductIndex
