
import React from 'react';
import { Trophy, Gauge, ShieldCheck, Zap } from 'lucide-react';
import { Achievement, Sponsor } from './types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    year: 'HISTÓRICO',
    title: '500 Milhas de Interlagos',
    category: 'Turismo 1.4',
    description: 'Primeira equipe campeã das 500 Milhas de Marcas e Pilotos 1.4. Vitória histórica em Interlagos, consolidando a RSSports como referência nacional em preparação e estratégia de corrida.',
    highlight: 'MARCO HISTÓRICO'
  },
  {
    year: 'ENDURANCE',
    title: '1000 Milhas de Interlagos',
    category: 'Categoria T1B e 1.4',
    description: 'Campeã das 1000 Milhas de Interlagos categoria T1B (2026) e 1.4 (2025), consolidando sua autoridade em provas de longa duração através de preparação extrema, estratégia de corrida e confiabilidade mecânica.',
    highlight: 'Performance Extrema'
  },
  {
    year: 'TRADIÇÃO',
    title: '12 Horas de Tarumã',
    category: 'Categoria 1.4',
    description: 'Bi-campeã das 12 Horas de Tarumã (2025 e 2026). Onde tudo começou, onde a RSSports domina: resistência, estratégia e performance levadas ao limite por 12 horas.',
    highlight: 'A CASA DA RSSPORTS'
  }
  
];

export const SPONSORS: Sponsor[] = [
  { name: 'Volda', logo: 'https://volda.com.br/wp-content/uploads/2021/11/logo-volda.png' },
  { name: 'Hoerlle', logo: 'https://picsum.photos/seed/sp2/200/100' },
  { name: 'Empower', logo: 'https://picsum.photos/seed/sp3/200/100' },
  { name: 'JetPoa', logo: 'https://picsum.photos/seed/sp4/200/100' },
];

export const FEATURES = [
  {
    icon: <Trophy className="w-8 h-8 text-racingYellow" />,
    title: 'Engenharia Multimarcas',
    description: 'Expertise técnica em plataformas Onix, Etios, BMW, Polo, Audi e projetos próprios customizados.'
  },
  {
    icon: <Gauge className="w-8 h-8 text-racingYellow" />,
    title: 'Alta Performance',
    description: 'Desenvolvimento de motores e chassis para máxima eficiência em provas de Endurance e Velocidade.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-racingYellow" />,
    title: 'Projetos Próprios',
    description: 'Criação de soluções de engenharia do zero para atender regulamentos específicos e desafios de pista.'
  },
  {
    icon: <Zap className="w-8 h-8 text-racingYellow" />,
    title: 'Estratégia de Vitória',
    description: 'Gerenciamento completo de equipe, telemetria avançada e logística de competição nacional.'
  }
];
