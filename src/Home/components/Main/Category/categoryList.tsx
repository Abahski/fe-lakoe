import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import { getCategory } from '../../../../lib/api/call/category'
import { useEffect, useState } from 'react'
import { ICategory } from '../../../../types/app'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CategoryList = () => {
    const [categories, setCategories] = useState<ICategory[]>([]) 
    const getCategoryAPI =  async() => {
      try {
        const res = await getCategory()
        console.log(res.data.data)
        setCategories(res.data.data)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
        getCategoryAPI()
    },[])
    return (
        <Box>
            <Box display={"flex"} justifyContent={"center"} gap={1} p={1}>
                {categories.map((category, index) => (
                    <Box key={index}>
                        {/* start */}
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panela-content ${index}`}
                                id={`panela-content ${index}`}
                            >
                                <Typography>{category.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box display={"flex"} flexDirection={"row"} gap={2}>
                                    {category.children?.map((childOne, index) => (
                                        <Box key={index} p={2}>
                                            <Typography>{childOne.name}</Typography>
                                            {childOne.children?.map((childTwo, index) => (
                                                <Box display={"flex"} key={index} p={2}>
                                                    <Typography>{childTwo.name}</Typography>
                                                </Box>
                                            ))}  
                                        </Box>
                                    ))}
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        {/* end */}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default CategoryList
