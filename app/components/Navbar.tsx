import { AutoAwesome } from '@mui/icons-material'
import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
   
         <AppBar position="sticky" sx={{ backgroundColor: "#7D0A0A" }}>
           <Toolbar>
             <AutoAwesome sx={{ 
               mr: 2, 
               fontSize: 32,
               color: "#EAD196" 
             }} />
             <Typography variant="h6" sx={{ 
               flexGrow: 1, 
               fontWeight: 700,
               letterSpacing: 1,
               color: "common.white"
             }}>
               BG Magic
             </Typography>
           </Toolbar>
         </AppBar>
  )
}

export default Navbar