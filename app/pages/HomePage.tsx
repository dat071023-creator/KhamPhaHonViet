import React from 'react';
import { Box, TextField, InputAdornment, Container, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export function meta() {
  return [
    { title: "Trang chủ – Khám phá Hồn Việt" },
    { name: "description", content: "Khám phá văn hóa, lịch sử và các tour du lịch độc đáo trên khắp Việt Nam." },
  ];
}

export default function HomePage() {
  return (
    <Container maxWidth="lg" className="py-8">
      <Box className="text-center my-12">
        <Typography variant="h2" component="h1" className="font-bold text-gray-800 dark:text-white mb-4">
          Khám phá Hồn Việt
        </Typography>
        <Typography variant="h6" component="p" className="text-gray-600 dark:text-gray-300">
          Nơi văn hóa, lịch sử và thiên nhiên hòa quyện
        </Typography>
      </Box>

      <Box className="my-8 max-w-3xl mx-auto">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Bạn muốn khám phá vùng đất nào hôm nay?"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              borderRadius: '50px', // Rounded corners
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(0, 0, 0, 0.23)',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(0, 0, 0, 0.87)',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#166534', // Green-800
              },
            }
          }}
        />
      </Box>

      {/* Interactive Map Placeholder */}
      <Box className="my-16 p-8 border-dashed border-2 border-gray-300 rounded-lg text-center">
        <Typography variant="h6" className="text-gray-500">Bản đồ tương tác Việt Nam sẽ được hiển thị ở đây</Typography>
      </Box>

      {/* Topics Slider Placeholder */}
      <Box className="my-16 p-8 border-dashed border-2 border-gray-300 rounded-lg text-center">
        <Typography variant="h6" className="text-gray-500">Slider chủ đề (Truyền thuyết, Lễ hội, Tour) sẽ được hiển thị ở đây</Typography>
      </Box>

    </Container>
  );
}