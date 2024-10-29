import React from 'react'
import { Competence } from '../components/Profil/Competence/Competence'
import { Formation } from '../components/Profil/Formation/Formation'
import { Description } from '../components/Profil/Description/Description'
import Experience from '../components/Profil/Experience/Experience'
import { Certification } from '../components/Profil/Certification/Certification'
// import { Affiliation } from '../components/Profil/Affiliation/Affiliation'

export const Profil = () => {
  return (
    <>
      <Description />
      <Competence />
      <Formation />
      <Experience />
      <Certification />
      {/* <Affiliation /> */}
    </>
  )
}
