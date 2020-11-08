import * as React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const VSpace: React.FC<Props> = props => {
  return <div className={props.className} />;
};

const StyledVSpace = styled(VSpace)`
  margin-top: 1rem;
`;

export default StyledVSpace;
