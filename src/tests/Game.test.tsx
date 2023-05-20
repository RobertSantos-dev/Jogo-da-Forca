import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import Game from '../screens/Game';

describe('Teste de Integração para a screen Game', () => {
  beforeEach(() => { render(<Game />) });

  it('01 - Teste se é rederizado a tela com o texto de dica', () => {
    const dica = screen.getByTestId('dicaId');
    expect(dica).toBeTruthy();
  });

  it('02 - Teste se é rederizado a tela com mais de 7 botões', () => {
    const buttons = screen.getAllByRole('button');
    for (let i = 0; i < 7; i += 1) {
      expect(buttons[i]).toBeTruthy();
    }
  });

  it('03 - Teste se é rederizado a tela com uma lista de letras', () => {
    const letters = screen.getByTestId('listLetters');
    expect(letters._fiber.stateNode.props.data).toBeTruthy()
  });

  it('04 - Teste se ao clicar em um button, o mesmo sera removido', async () => {
    const buttons = screen.getAllByRole('button');
    fireEvent.press(buttons[0]);

    const buttons2 = screen.getAllByRole('button');
    expect(buttons2.length).toEqual(buttons.length - 1);
  });
});
