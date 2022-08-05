import React from 'react'
import Header from '../../component/Header/Header'
import { DescriptionError, ErrorContainer, TitleError } from './styled'

export default function ErrorPage() {
  return (
    <>
      <Header page={'not found'} />
      <ErrorContainer>
        <TitleError>404</TitleError>
        <DescriptionError>Página não encontrada</DescriptionError>
      </ErrorContainer>
    </>
  )
}
