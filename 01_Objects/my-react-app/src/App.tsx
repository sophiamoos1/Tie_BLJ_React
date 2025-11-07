import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import type { Player } from './types/Player'
import type { Club } from './types/Club'
import { CountryEnum } from './types/CountryEnum'

function App() {
  const club1: Club = {
    id: 1,
    name: "Barcelona",
    country: CountryEnum.SPAIN
  }

  const player1: Player = {
    id: 1,
    name: "Pablo Martín Páez Gavira",
    club: club1,
    goals: 28
  }

  return (
    <>
      <h1>Object and Types in Typescript</h1>
    </>
  )
}

export default App
