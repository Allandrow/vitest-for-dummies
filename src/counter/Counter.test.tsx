import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

/*
  IDEE DU TEST :

  On veut vérifier que lors du clic sur le compteur, la valeur affichée est bien incrémentée ou décrémentée
  A noter que les tests ici sont relativement superflus, normalement c'est pas la peine d'autant se prendre la tête
  Mais au moins ça permet de mieux voir j'espère
*/

describe('Counter', () => {
  // Test pour vérifier que nos boutons et textes sont bien générés avec une valeur de base
  test('Component is loaded with initial count at 0', () => {
    // Render du composant
    render(<Counter />);

    // Récupération des éléments pour s'assurer de leur présence
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    const countValue = screen.getByRole('heading', { name: /0/ });
    const incrementButton = screen.getByRole('button', { name: /increment/i });

    // Assertions pour valider les tests
    expect(decrementButton).toBeInTheDocument();
    expect(countValue).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
  });

  test('Click on increment button should add 1 to the value displayed', async () => {
    render(<Counter />);

    // Setup du user pour les simulations d'event (click ici)
    const user = userEvent.setup();

    // Utilisation du user-event pour simuler un clic sur le button qui incrémente
    await user.click(screen.getByRole('button', { name: /increment/i }));

    // Assertion que la valeur du compte affichée est de 1 dorénavant
    expect(screen.getByRole('heading', { name: /1/ })).toBeInTheDocument();
  });

  test('Click on decrement button should subtract 1 to the value displayed', async () => {
    render(<Counter />);

    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /decrement/i }));

    expect(screen.getByRole('heading', { name: /-1/ })).toBeInTheDocument();
  });

  // Bonus test, d'abord on incrémente de 1, puis on décrémente de 1 pour vérifier que la valeur est 0
  test('Click on increment and decrement to display a value of 0', async () => {
    render(<Counter />);

    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: /increment/i }));
    await user.click(screen.getByRole('button', { name: /decrement/i }));

    expect(screen.getByRole('heading', { name: /0/ })).toBeInTheDocument();
  });
});
