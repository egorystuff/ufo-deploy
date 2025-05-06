import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {Box, useMediaQuery} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const faqs = [
    {
        question: 'Can the UFO app help me lose weight?',
        answer: 'The Simple app can help you lose weight — and it can help you with much more than that, too. You’ll learn how to make healthy, balanced eating choices. You’ll feel more confident and in control with food. You’ll get fitter, drink more water, and have more energy. You’ll develop the skills to prioritize self-care and live a healthier lifestyle. (We’re excited for you, honestly!)'
    },
    {
        question: 'Does UFO make me count calories, cut out carbs, or weigh all my food?',
        answer: 'Nope. The Simple method doesn’t include calorie counting, cutting out essential food groups, or weighing every bite. Instead, we prioritize safety and sustainability. So, we’ll coach you to lose weight through a behavior change approach that teaches you how to meet your nutritional needs, get active, safely intermittent fast, and more.',
    },
    {
        question: 'How will UFO’s coaching be customized to me?',
        answer: 'The coaching experience you’ll get with Simple is built around you. From the moment you create your Simple account, you’re the star of the show. Here’s how: Your personal AI coach, Avo™, will create daily actions just for you, and reach out with tips and insights when you need them, to keep you moving forward. You’ll see fresh educational content in the app based on the food, hydration, and physical activity you log. We’ll recommend an intermittent fasting schedule that suits your weight loss goals and timeline. The reminders we send will match your schedule and tracking activity (for instance, if you haven’t logged any water today, we’ll remind you to grab a drink).',
    },
    {
        question: 'Can I trust UFO’s science?',
        answer: 'You 100% can trust Simple’s science, whether it’s in-app, on the blog, or on our social media. We take science very seriously, so all of our content is written using accurate, credible, and reliable research. It’s also reviewed thoroughly by our experts before being released and refreshed regularly to keep it up to date.',
    },
    {
        question: 'What does the UFO Premium subscription include and how much does it cost?',
        answer: 'The free version of the Simple app gives you access to many of our awesome features like real-time answers from Coach Avo™, Nutrition Scores for the meals you log, and all our wellness habit Trackers. Plenty to get you started on your health journey.  Upgrading to a Premium subscription will unlock daily, personalized check-ins and actions from Coach Avo™, as well as our educational library to propel you to even greater success. Our prices vary based on the subscription length you choose when signing up and are very affordable compared to human health coaches. For more subscription information, check out our Terms of Use and Refund Policy.',
    },
];

const FaqAccordion = () => {
    const [expanded, setExpanded] = useState(null);
    const isMobile = useMediaQuery('(max-width:850px)');


    const handleChange = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <div>
            {faqs.map((faq, index) => (
                <Accordion
                    key={index}
                    expanded={expanded === index}
                    onChange={() => handleChange(index)}
                    className='custom-accordeon'
                    sx={{ boxShadow: 'none' , borderBottom: '1px solid #F2F2F2' , transition: 'all 0.5s ease' }}
                >
                    <AccordionSummary
                        expandIcon={
                            <Box
                                sx={{
                                    display: 'flex',
                                    width: isMobile ? '41px': '64px',
                                    height: isMobile ? '41px': '64px',
                                    padding: '17px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexShrink: 0,
                                    borderRadius: '12px',
                                    background: 'var(--Light-Grey, #F5F5F5)',
                                }}
                            >
                                {expanded === index ? <RemoveIcon sx={{ color: '#F26322' }} /> : <AddIcon sx={{ color: '#F26322' }} />}
                            </Box>
                        }
                        sx={{ padding:
                                expanded === index ? (isMobile ? '16px 0 0' : '32px 0 0') : (isMobile ? '16px' + ' 0' : '32px 0') ,
                            transition: 'all 0.5s ease'}}
                    >
                        <Typography className='accordion-summary-text' sx={{ fontWeight: '450', color: '#241063' }}>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='custom-accordeon-details'
                                      sx={{ boxShadow: 'none' ,
                                          padding:'0',
                                          paddingBottom:'20px' , transition: 'all 0.5s ease'}}>
                        <Typography className='faq-answer' sx={{ color: '#7F6FA4', transition: 'all 0.5s ease' }}>{faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default FaqAccordion;
