import React, { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/material/styles";
import { Chart } from "../Chart/ChartComponent";
import { colors } from "../../settings/styles";

const StyledFavoriteIcon = styled(FavoriteIcon)({
  color: colors.pink,
  paddingLeft: "10px",
});

function useMediaQuery(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

const Results = ({ results, dataAnswer, dataAnswer2 }) => {
  const isMobile = useMediaQuery("(max-width: 582px)");

  const userAnswersData = results.map(answer => answer.value);
  const teamAnswersData = dataAnswer2[0].data[0].values; 

  const chartData = isMobile ? dataAnswer2[0] : dataAnswer[0];

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1 className="thanks">
            Thank you for your time
            <StyledFavoriteIcon />
          </h1>
          <div className="content-box">
            <h2 className="thanks-subtitle">Find your results below</h2>
            <Chart
              labels={chartData.labels}
              userAnswersData={userAnswersData} 
              teamAnswersData={teamAnswersData}
              isMobile={isMobile}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
