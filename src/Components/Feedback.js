import React, { useState, memo } from 'react';
import {
  Card,
  CardContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Container,
  Stack,
  Typography,
  Box
} from '@mui/material';
//using memo for future scenario if a parent component is added 
const FeedbackForm = memo(() => {
  const [formData, setFormData] = useState({
    rating: '',
    message: '',
    visibility: 'private',
    username: '',
    email: ''
  });

  const ratings = [
    { value: 1, label: 'Poor' },
    { value: 2, label: 'Fair' },
    { value: 3, label: 'Good' },
    { value: 4, label: 'Very Good' },
    { value: 5, label: 'Excellent' }
  ];

  const handleChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };


  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" sx={{ mb: 3 }} align="center">
            Share Your Feedback
          </Typography>

          <form>
            <Stack spacing={3}>
              <FormControl fullWidth>
                <InputLabel id="rating-label">Rating</InputLabel>
                <Select
                  labelId="rating-label"
                  value={formData.rating}
                  label="Rating"
                  onChange={handleChange('rating')}
                  required
                >
                  <MenuItem value="">Select a rating</MenuItem>
                  {ratings.map((rating) => (
                    <MenuItem key={rating.value} value={rating.value}>
                      {rating.value} - {rating.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                label="Message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange('message')}
                required
                fullWidth
              />

              <FormControl fullWidth>
                <InputLabel id="visibility-label">Visibility</InputLabel>
                <Select
                  labelId="visibility-label"
                  value={formData.visibility}
                  label="Visibility"
                  onChange={handleChange('visibility')}
                >
                  <MenuItem value="private">Private</MenuItem>
                  <MenuItem value="public">Public</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Username"
                value={formData.username}
                onChange={handleChange('username')}
                required
                fullWidth
              />

              <TextField
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
                required
                fullWidth
              />

              <Button 
                type="submit"
                variant="contained" 
                color="primary"
                fullWidth
                size="large"
              >
                Submit Feedback
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
});

FeedbackForm.displayName = 'FeedbackForm';
export default FeedbackForm;