import { AutoAwesome, Code, Copyright, GitHub } from '@mui/icons-material'
import { Box, Button, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    
    <Box
    component="footer"
    sx={{ 
      backgroundColor: "#7D0A0A",
      color: "common.white",
      py: 4
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center">
            <AutoAwesome sx={{ mr: 1, color: "#EAD196" }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              BG Magic
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ mt: 2, opacity: 0.8 }}>
            Empowering creativity with AI-powered image processing
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box display="flex" gap={2} justifyContent="flex-end">
            <IconButton 
              href="https://github.com" 
              target="_blank"
              sx={{ color: "common.white" }}
            >
              <GitHub />
              
            </IconButton>
            <Button 
              variant="outlined" 
              color="secondary"
              startIcon={<Code />}
              href="https://github.com/Hamza-code88"
              target="_blank"
            >
              View Source
            </Button>
          </Box>
        </Grid>
      </Grid>
      
      <Box
        sx={{
          mt: 4,
          pt: 2,
          borderTop: 1,
          borderColor: "divider",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1
        }}
        
      >
        <Copyright fontSize="small" />
        <Typography variant="body2">
          {new Date().getFullYear()} BG Magic. All rights reserved.
        </Typography>
      </Box>
    </Container>
  </Box>
  )
}

export default Footer