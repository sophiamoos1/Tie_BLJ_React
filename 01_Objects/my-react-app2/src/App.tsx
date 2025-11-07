import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import type {Player} from './types/Player';
import type {Club} from './types/Club';
import {CountryEnum} from './types/CountryEnum';

function App() {
  const [player, setPlayer] = React.useState<Player>();

  const club1: Club = {
    id: 1,
    name: "Barcelona",
    country: CountryEnum.SPAIN
  }

  const player1: Player = {
    id: 1,
    name: "Pablo Martin Paez Gavira",
    goals: 28,
    club: club1
  };

  return (
    <>
    <h1>Objects in Typescript</h1>
    </>
  )
}

export default App
