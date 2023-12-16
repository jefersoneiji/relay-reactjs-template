import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';

import type { relayConsumerQuery as relayConsumerType } from './__generated__/relayConsumerQuery.graphql';

const relayConsumerQuery = graphql`
  query relayConsumerQuery {
    ok {
      value
    }
  }
`;

export const RelayConsumer = () => {
  const data = useLazyLoadQuery<relayConsumerType>(relayConsumerQuery, {});
  return <p>{String(data.ok.value)}</p>;
};