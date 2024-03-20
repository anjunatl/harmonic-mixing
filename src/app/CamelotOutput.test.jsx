import React from 'react'
import { render, screen } from '@testing-library/react';
import CamelotOutput from './CamelotOutput'
import '@testing-library/jest-dom'

describe('Camelot output', () => {
  test('shows empty div when no camelot key is set', () => {
    const { container } = render(<CamelotOutput />)
    expect(screen.getByText('Set your current key above')).toHaveClass('empty')
    expect(container.getElementsByClassName('empty').length).toBe(1)
  })

  test('does not show the empty div when a camelot key is set', () => {
    const { container } = render(<CamelotOutput camelotKey="12A" />)
    expect(screen.queryByText('Set your current key above')).not.toBeInTheDocument()
    expect(container.getElementsByClassName('empty').length).toBe(0)
  })

  test('shows results table when a camelot key is set', () => {
    const { container } = render(<CamelotOutput camelotKey="12A" />)
    expect(screen.queryByText(/Transition from/)).toBeInTheDocument()
    const outputTables = container.getElementsByClassName('table')
    expect(outputTables.length).toBe(1);
  })

  test('has the expected number of results rows when a camelot key is set', () => {
    const { container } = render(<CamelotOutput camelotKey="12A" />)
    const results = container.getElementsByClassName('result')
    expect(results.length).toBe(7)
  })
})
