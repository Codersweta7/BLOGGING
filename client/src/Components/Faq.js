import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Collapse,
  Divider,
  Box,
} from '@mui/material';

const faqs = [
  {
    question: 'How do I register on the blog website?',
    answer:
      "You can register by clicking on the 'Register' button and filling out the required details.",
  },
  {
    question: 'Can I create and publish my own blogs?',
    answer:
      "Yes! Once you're logged in, you can create and publish blogs from your dashboard.",
  },
  {
    question: 'Is there a limit to the number of blogs I can create?',
    answer: 'No, you can create and publish as many blogs as you like.',
  },
  {
    question: 'What types of vlogs are there?',
    answer:
      'There are various types of vlogs including travel, lifestyle, tech, fitness, educational, and daily vlogs.',
  },
  {
    question: 'How often should I post vlogs?',
    answer:
      'Consistency is key. Posting at least once a week helps maintain audience engagement.',
  },
  {
    question: 'What is the ideal length for a vlog?',
    answer:
      'Most engaging vlogs are between 5 to 15 minutes long, but it depends on your content style.',
  },
  {
    question: 'How can I grow my vlogging channel?',
    answer:
      'Promote your vlogs on social media, optimize video titles and descriptions, and engage with your audience.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='my-28'>
      <Container maxWidth='md' sx={{ mt: 4 }}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant='h4' align='center' gutterBottom>
              Frequently Asked Questions
            </Typography>
            {faqs.map((faq, index) => (
              <Box key={index} sx={{ my: 2 }}>
                <Button
                  fullWidth
                  variant='text'
                  onClick={() => toggleFAQ(index)}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: 'primary.main',
                  }}
                >
                  {faq.question}
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </Button>
                <Collapse in={openIndex === index}>
                  <Typography sx={{ p: 2, color: 'text.secondary' }}>
                    {faq.answer}
                  </Typography>
                </Collapse>
                <Divider />
              </Box>
            ))}
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default FAQ;
