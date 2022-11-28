import { DateTime } from "luxon";
import { TimeAndRankingRaw } from "../types/timings.types";

export const getTimings = async () => {
  const url = "https://toilet-a075.restdb.io/rest/timings";
  const timingsReponse = await fetch(url, {
    method: "GET",
    headers: {
      "x-api-key": "601f19033f9eb665a1689200",
    },
  });

  const data: TimeAndRankingRaw[] = await timingsReponse.json();

  const formattedData = data.map((x) => ({
    time: DateTime.fromFormat(x.DateTime, "dd/LL/yyyy hh:mm"),
    ranking: x.Ranking,
  }));

  const sortedData = formattedData.sort((x, y) =>
    x.time > y.time ? 1 : x.time < y.time ? -1 : 0
  );

  return sortedData;
};
