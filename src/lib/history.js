import * as R from "ramda";

import { build, fake, incrementingId } from "test-data-bot";

const historyItemBuilder = build("HistoryItem").fields({
  id: incrementingId(),
  url: fake(f => f.internet.url()),
  title: fake(f => f.name.title()),
  lastVisitTime: fake(f => f.date.past()),
  visitCount: fake(f => f.random.number({ min: 1, max: 100 })),
  typedCount: fake(f => f.random.number({ min: 0, max: 10 }))
});

const fakeHistoryItems = [...Array(1000)].map(historyItemBuilder);

const matchQuery = R.curry((query, string) => {
  query = query.toLowerCase();
  return string.toLowerCase().search(query) > -1;
});

const mockSearchHistory = (
  query,
  { startTime, endTime, maxResults = 100 } = {}
) => {
  const dateComparison = R.and(
    endTime ? R.lte(endTime.getTime()) : R.T,
    startTime ? R.gte(startTime.getTime()) : R.T
  );

  const queryMatcher = matchQuery(query);
  const filterPredicate = R.allPass([
    R.propSatisfies(dateComparison, "lastVisitTime"),
    R.anyPass([
      R.propSatisfies(queryMatcher, "title"),
      R.propSatisfies(queryMatcher, "url")
    ])
  ]);

  return R.compose(
    R.slice(0, maxResults),
    R.filter(filterPredicate)
  )(fakeHistoryItems);
};

export const searchHistory = mockSearchHistory;
