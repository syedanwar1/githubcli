import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { keyframes } from "@mui/system";

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const cards = [
  {
    id: 1,
    title: 'HTML',
    description: 'Plants are essential for all life.',
    color: '#29b6f6'
  },
  {
    id: 2,
    title: 'CSS',
    description: 'Animals are a part of nature.',
    color: '#f48fb1'
  },
  {
    id: 3,
    title: 'JavaScript',
    description: 'Humans depend on plants and animals for survival.',
    color: '#8bc34a'
  },
  {
    id: 4,
    title: 'ReactJS',
    description: 'Humans depend on plants and animals for survival.',
    color: '#e57373'
  },
  {
    id: 5,
    title: 'AngularJS',
    description: 'Humans depend on plants and animals for survival.',
    color: '#009688'
  },
  {
    id: 6,
    title: 'Angular 5+',
    description: 'Humans depend on plants and animals for survival.',
    color: '#ce93d8'
  },
  {
    id: 7,
    title: 'TypeScript',
    description: 'Humans depend on plants and animals for survival.',
    color: '#c0ca33'
  },
  {
    id: 8,
    title: 'Tailwind Css',
    description: 'Humans depend on plants and animals for survival.',
    color: '#8d6e63'
  },
  {
    id: 9,
    title: 'Material UI',
    description: 'Humans depend on plants and animals for survival.',
    color: '#4dd0e1'
  },
  
];

export default function Skills() {
    const [selectedCard, setSelectedCard] = React.useState();
    return (
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 5,
        }}
      >
      {cards.map((card, index) => {
        const isActive = selectedCard === index;

        return (
          <Card
            key={index}
            sx={{
              gridColumn: isActive ? "span 3" : "auto",
              gridRow: isActive ? "span 2" : "auto",
              transition: "all 0.5s ease",
    
              opacity: 0,
              animation: `${fadeInUp} 600ms ease forwards`,
              animationDelay: `${index * 120}ms`,
    
              '@media (prefers-reduced-motion: reduce)': {
                animation: "none",
                opacity: 1,
                transform: "none",
              },
            }}
          >
            <CardActionArea
              onClick={() => setSelectedCard(isActive ? null : index)}
              sx={{
                height: "100%",
                "&[data-active]": {
                  backgroundColor: "action.selected",
                  "&:hover": {
                    backgroundColor: "action.selectedHover",
                  },
                },
              }}
              data-active={isActive ? "" : undefined}
            >
              <CardContent sx={{backgroundColor: card.color}}>
                <Typography variant="h5" component="div" color='#fff'>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="#fff">
                  {card.description}
                </Typography>

                {/* Expanded details */}
                {isActive && (
                  <Typography
                    variant="body1"
                    color="text.primary"
                    sx={{ mt: 2 }}
                  >
                    {card.details}
                  </Typography>
                )}
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
      </Box>
    );
}