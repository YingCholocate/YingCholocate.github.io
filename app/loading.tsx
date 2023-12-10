import React from 'react'
import { Container } from '~/components/ui/Container'

export default function Loading() {
  return (
    <Container>
      <span className="loading loading-spinner loading-lg"></span>
    </Container>
  )
}
