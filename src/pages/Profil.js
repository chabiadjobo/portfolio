import React from 'react'
import { Competence } from '../components/Profil/Competence/Competence'
import { Formation } from '../components/Profil/Formation/Formation'
import { Experience } from '../components/Profil/Experience/Experience'
import { Affiliation } from '../components/Profil/Affiliation/Affiliation'

export const Profil = () => {
  return (
    <>
      <Competence />
      <Formation />
      <Experience />
      <Affiliation />
    </>
  )
}
