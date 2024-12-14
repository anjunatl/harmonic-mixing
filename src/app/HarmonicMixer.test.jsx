import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import HarmonicMixer from './HarmonicMixer'

describe('Harmonic mixer', () => {
  test('renders', () => {
    const { container } = render(<HarmonicMixer />)
    expect(screen.getByText('Harmonic Mixer'))
    const numbers = container.querySelectorAll('div.numbers button')
    expect(numbers.length).toBe(12)
    const letters = container.querySelectorAll('div.letters button')
    expect(letters.length).toBe(2)
    const results = container.querySelectorAll('div.result')
    expect(results.length).toBe(0)
  })

  test('picking 1A will show the results for camelot key 1A', async () => {
    const { container } = render(<HarmonicMixer />)
    
    fireEvent.click( screen.getByText('1') )
    fireEvent.click( screen.getByText('Minor') )

    expect( await screen.findByText('Relative key') ).toBeVisible()
    expect( screen.getByTestId('output-mix-relative') ).toHaveTextContent('1B')
    expect( screen.getByTestId('output-mix-notation-relative') ).toHaveTextContent('BM')

    expect( await screen.findByText('Dominant key') ) .toBeVisible()
    expect( screen.getByTestId('output-mix-dominant') ).toHaveTextContent('2A')
    expect( screen.getByTestId('output-mix-notation-dominant') ).toHaveTextContent('Ebm')
    
    expect( await screen.findByText('Subdominant key') ) 
    expect( screen.getByTestId('output-mix-subdominant') ).toHaveTextContent('12A')
    expect( screen.getByTestId('output-mix-notation-subdominant') ).toHaveTextContent('Dbm')
    
    expect( await screen.findByText('Parallel key') ) 
    expect( screen.getByTestId('output-mix-parallel') ).toHaveTextContent('10B')
    expect( screen.getByTestId('output-mix-notation-parallel') ).toHaveTextContent('DM')

    expect( await screen.findByText('Diagonal mix') ) 
    expect( screen.getByTestId('output-mix-diagonal') ).toHaveTextContent('12B')
    expect( screen.getByTestId('output-mix-notation-diagonal') ).toHaveTextContent('EM')

    expect( await screen.findByText('Gentle energy boost') ) 
    expect( screen.getByTestId('output-mix-gentleBoost') ).toHaveTextContent('8A')
    expect( screen.getByTestId('output-mix-notation-gentleBoost') ).toHaveTextContent('Am')

    expect( await screen.findByText('Rapid energy boost') ) 
    expect( screen.getByTestId('output-mix-rapidBoost') ).toHaveTextContent('3A')
    expect( screen.getByTestId('output-mix-notation-rapidBoost') ).toHaveTextContent('Bbm')
  })
})
