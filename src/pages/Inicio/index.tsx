import React, { useEffect, useState } from 'react';

import Featured from '../../components/Featured';
import TrendingMovie from '../../components/TrendingMovie';
import TrendingSerie from '../../components/TrendingSeries';
import Comedy from '../../components/Comedy';
import Action from '../../components/Action';
import Horror from '../../components/Horror';
import Romance from '../../components/Romance';
import Documentary from '../../components/Documentary';

import { Container } from './styles';

export default function Inicio() {
  return (
    <Container>
      <Featured />
      <TrendingMovie />
      <TrendingSerie />
      <Comedy />
      <Romance />
      <Action />
      <Documentary />
      <Horror />
    </Container>
  );
}

