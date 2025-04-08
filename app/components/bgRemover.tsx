'use client';
import { useState } from "react";
import { 
  Button, 
  Container, 
  Typography, 
  CircularProgress, 
  Stack, 
  Grid, 
  Paper, 
  IconButton,
  LinearProgress
} from "@mui/material";

import {
  CloudUpload,
  Delete,
  Download,
  Image as ImageIcon,
  Refresh
} from "@mui/icons-material";
import { removeBackground } from "@imgly/background-removal";
import Image from "next/image"; 

export default function BgRemover() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setOutputImage(null);
    }
  };

  const handleRemoveBackground = async () => {
    if (!selectedImage) return;
    setLoading(true);

    try {
      const resultBlob = await removeBackground(selectedImage);
      setOutputImage(URL.createObjectURL(resultBlob));
    } catch (err) {
      console.error("Error removing background:", err);
    }
    setLoading(false);
  };

  const handleDownload = () => {
    if (!outputImage) return;
    const link = document.createElement("a");
    link.href = outputImage;
    link.download = "bg_removed.png";
    link.click();
  };

  const handleClear = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    setOutputImage(null);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack spacing={4} alignItems="center">
       
        <Paper
          variant="outlined"
          sx={{
            p: 4,
            width: '100%',
            maxWidth: 500,
            textAlign: 'center',
            borderStyle: 'dashed',
            bgcolor: '#EEEEEE', 
            '&:hover': { borderColor: '#BF3131' }, 
            boxShadow: 3,
          }}
        >
          <input
            accept="image/*"
            type="file"
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="upload-input"
            disabled={loading}
          />
          <label htmlFor="upload-input">
            <Button
              component="span"
              variant="contained"
              startIcon={<CloudUpload />}
              disabled={loading}
              sx={{
                bgcolor: '#7D0A0A', // Primary Red
                '&:hover': { bgcolor: '#BF3131' }
              }}
            >
              Choose Image
            </Button>
          </label>

          {selectedImage && (
            <Typography variant="subtitle2" sx={{ mt: 2, color: "#4A5568" }}>
              Selected: {selectedImage.name}
            </Typography>
          )}
        </Paper>

        {previewUrl && (
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, position: 'relative', boxShadow: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Original Image
                  <IconButton 
                    onClick={handleClear} 
                    sx={{ position: 'absolute', right: 8, top: 8 }}
                  >
                    <Delete />
                  </IconButton>
                </Typography>
                <Image
                  src={previewUrl}
                  alt="Preview"
                  width={400}
                  height={400}
                  objectFit="contain"
                  style={{ borderRadius: 8 }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleRemoveBackground}
                  disabled={loading}
                  sx={{
                    mt: 2,
                    bgcolor: '#FF9800',  
                    '&:hover': { bgcolor: '#F57C00' }
                  }}
                  startIcon={loading ? <CircularProgress size={20} /> : <ImageIcon />}
                >
                  {loading ? 'Processing...' : 'Remove Background'}
                </Button>
              </Paper>
            </Grid>

            {outputImage && (
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 2, position: 'relative', boxShadow: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Result
                    <IconButton 
                      onClick={handleDownload}
                      sx={{ position: 'absolute', right: 8, top: 8 }}
                    >
                      <Download />
                    </IconButton>
                  </Typography>
                  <Image
                    src={outputImage}
                    alt="Result"
                    width={400}
                    height={400}
                    objectFit="contain"
                    style={{ borderRadius: 8 }}
                  />
                  {loading && (
                    <LinearProgress 
                      sx={{
                        mt: 2,
                        height: 8,
                        borderRadius: 4,
                        bgcolor: '#7D0A0A'
                      }} 
                    />
                  )}
                </Paper>
              </Grid>
            )}
          </Grid>
        )}

       
        {(selectedImage || outputImage) && (
          <Button
            variant="outlined"
            startIcon={<Refresh />}
            onClick={handleClear}
            sx={{
              bgcolor: '#EEEEEE', 
              '&:hover': { bgcolor: '#BF3131' }, 
              borderColor: '#BF3131',
              mt: 2,
            }}
          >
            Reset
          </Button>
        )}
      </Stack>
    </Container>
  );
}
