import { Card } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const cityCard = () => {



    return (
        <Box
      key={'test'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
        overflow: 'auto',
        paddingBottom: '10px'
      }}
    >
      <Card sx={{ width: { xs: '90%', sm: '65%', md: '50%', lg: '40%' } }}>
        <Box>
            
        </Box>
      </Card>
        </Box>
    )
}

export default cityCard