import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

export const StarContainer = styled.div`
  display: inline-flex;
  margin-bottom: 10px;
`;

export const Star = styled(FaStar)`
  color: ${(props) => (props.selected ? '#ffc107' : '#e4e5e9')};
  cursor: pointer;
`;

export const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div>
      <h2>Sua Avaliação: {rating} estrelas</h2>
      <StarContainer>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            selected={star <= rating}
            onClick={() => handleStarClick(star)}
          />
        ))}
      </StarContainer>
    </div>
  );
};

