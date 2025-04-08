import { 
  Box, 
  Typography,  
  Container,
} from "@mui/material";
import BgRemover from "./components/bgRemover";

export default function Home() {
  return (
    <>
      

      
      <Box
        component="main"
        sx={{
          minHeight: "calc(100vh - 128px)",
          py: 8,
          backgroundColor: "#EEEEEE"
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" sx={{ 
              fontWeight: 800,
              mb: 2,
              color: "#7D0A0A",
              "& span": { color: "#BF3131" }
            }}>
              Remove <span>Background</span> Instantly
            </Typography>
            <Typography variant="h6" sx={{ 
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto"
            }}>
              Transform your images with AI-powered background removal in seconds
            </Typography>
          </Box>
          <BgRemover />
        </Container>
      </Box>

      
    </>
  );
}
