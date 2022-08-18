import axios from "axios";

import { popularGamesURL, upComingGamesURL, newGamesURL } from "../../api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const upComingData = await axios.get(upComingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upComing: upComingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};