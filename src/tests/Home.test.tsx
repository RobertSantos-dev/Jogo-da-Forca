import React from 'react';
import { render, screen,  } from '@testing-library/react-native';
import Home from '../screens/Home';

describe('Teste de Integração para a screen Home', () => {
  beforeEach(() => { render(<Home />) });

  it('01 - Teste se é rederizado a tela com os elementos e textos', () => {
    const tests = ['Linguagens', 'Front-End', 'Mobile', 'Back-End'];
    const buttons = screen.getAllByRole('button');

    buttons.forEach((e, i) => {
      const value = e._fiber.stateNode.props.children[0].props.children;
      expect(value).toBe(tests[i]);
    });
  });

  it('02 - Teste se é rederizado a tela com os textos do topo', () => {
    const textTitle = screen.getByText('FORCA');
    const textMessage = screen.getByText(/Para iniciarmos o jogo/i);

    expect(textTitle).toBeTruthy();
    expect(textMessage).toBeTruthy();
  });
});
