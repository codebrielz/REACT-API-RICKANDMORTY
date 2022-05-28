import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { obtenerPersonajes } from '../data/apiRickAndMorty'
import { CharacterScreen } from '../screens/CharacterScreen'
import { HomeScreen } from '../screens/HomeScreen'

export const AppRouter = () => {


  return (
    <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/:id" element={<CharacterScreen />} />
      </Routes>
  )
}
