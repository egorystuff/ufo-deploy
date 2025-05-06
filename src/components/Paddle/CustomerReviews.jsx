import { Box, Typography } from "@mui/material";

export const CustomerReviews = () => {
  // Array of customer review objects
  const reviews = [
    {
      id: 1,
      author: "Roger W.",
      title: "Love your cool content!",
      content:
        "The content is addictive! I open the app every morning just to see what's new. It's like a wellness magazine in my pocket.",
      rating: 5,
    },
    {
      id: 2,
      author: "Brett S.",
      title: "Lost 12 lbs in 5 weeks — and I still crave the healthy recipes",
      content:
        "I've tried so many apps, but this one nailed it. The recipes are quick, delicious, and totally satisfying. I'm eating better than ever — and the weight just melted off.",
      rating: 5,
    },
    {
      id: 3,
      author: "Greg H.",
      title: "Action plan helped me drop 18 lbs!",
      content:
        "The structured activity plan keeps me going every single day. No guesswork, just fun and progress. I used to hate exercise — now I look forward to it.",
      rating: 4,
    },
    {
      id: 4,
      author: "Tiffany F.",
      title: "22 lbs lighter in under 3 months — obsessed with the meal plans",
      content:
        "Every week brings new meals I can't wait to try. Grocery shopping is easy, cooking is fun, and I never feel deprived. This app completely changed my relationship with food.",
      rating: 5,
    },
  ];

  return (
    <Box sx={{ mt: 5 }}>
      {/* Section title */}
      <Typography
        variant='h5'
        sx={{
          color: "primary.main",
          fontSize: "26px",
          fontWeight: 700,
          mb: 4,
          textAlign: "left",
        }}>
        Customers reviews
      </Typography>

      {/* Mapping through all reviews */}
      {reviews.map((review) => (
        <Box
          key={review.id}
          sx={{
            mb: 2,
            p: 2,
            backgroundColor: "#F5F5F5",
            border: "1px solid #E1E1E1",
            borderRadius: "8px",
          }}>
          {/* Rating and author name in one line */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1,
              gap: 1,
            }}>
            {/* Star rating component */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <svg width='99' height='20' viewBox='0 0 79 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <rect width='15' height='15' fill='#249A50' />
                <path
                  d='M7.4206 10.1064L9.77353 9.47412L10.7147 12.4772L7.4206 10.1064ZM12.7539 6.31294H8.67549L7.4206 2.51953L6.1657 6.31294H2.24414L5.53825 8.68383L4.28335 12.4772L7.57746 10.1064L9.61667 8.68383L12.7539 6.31294Z'
                  fill='#FAF6F3'
                />
                <rect width='15' height='15' transform='translate(16)' fill='#249A50' />
                <path
                  d='M23.4206 10.1064L25.7735 9.47412L26.7147 12.4772L23.4206 10.1064ZM28.7539 6.31294H24.6755L23.4206 2.51953L22.1657 6.31294H18.2441L21.5382 8.68383L20.2834 12.4772L23.5775 10.1064L25.6167 8.68383L28.7539 6.31294Z'
                  fill='#FAF6F3'
                />
                <rect width='15' height='15' transform='translate(32)' fill='#249A50' />
                <path
                  d='M39.4206 10.1064L41.7735 9.47412L42.7147 12.4772L39.4206 10.1064ZM44.7539 6.31294H40.6755L39.4206 2.51953L38.1657 6.31294H34.2441L37.5382 8.68383L36.2834 12.4772L39.5775 10.1064L41.6167 8.68383L44.7539 6.31294Z'
                  fill='#FAF6F3'
                />
                <rect width='15' height='15' transform='translate(48)' fill='#249A50' />
                <path
                  d='M55.4206 10.1064L57.7735 9.47412L58.7147 12.4772L55.4206 10.1064ZM60.7539 6.31294H56.6755L55.4206 2.51953L54.1657 6.31294H50.2441L53.5382 8.68383L52.2834 12.4772L55.5775 10.1064L57.6167 8.68383L60.7539 6.31294Z'
                  fill='#FAF6F3'
                />
                <rect width='15' height='15' transform='translate(64)' fill='#E1E1E1' />
                <rect x='64' width='9' height='15' fill='#249A50' />
                <path
                  d='M71.4265 10.1064L73.7794 9.47412L74.7206 12.4772L71.4265 10.1064ZM76.7598 6.31294H72.6814L71.4265 2.51953L70.1716 6.31294H66.25L69.5441 8.68383L68.2892 12.4772L71.5833 10.1064L73.6225 8.68383L76.7598 6.31294Z'
                  fill='#FAF6F3'
                />
              </svg>
            </Box>

            {/* Author name */}
            <Typography
              variant='body1'
              sx={{
                fontWeight: 500,
                color: "primary.main",
                fontSize: "14px",
                mt: 0.25,
              }}>
              {review.author}
            </Typography>
          </Box>

          {/* Review title */}
          <Typography
            align='left'
            color='primary.main'
            sx={{
              fontWeight: 700,
              fontSize: "16px",
            }}>
            {review.title}
          </Typography>

          {/* Review content text */}
          <Typography
            align='left'
            color='primary.main'
            mt={1}
            sx={{
              fontSize: "16px",
              lineHeight: "20px",
            }}>
            {review.content}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
