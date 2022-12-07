/* eslint-disable @next/next/link-passhref */
import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import Map from "./components/Map"
import Link from  'next/link'

export default function Home() {
    
  return (
    <Wrapper>
      <Map />
      <ActionItems> 
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Sparsh Agarwal</Name>
            <UserImage src="https://lh3.googleusercontent.com/ogw/ADea4I5gYDiDNEWUmEbzxoHmqSnE7ccz9V7F0KphkrJZKw=s83-c-mo"/>
            </Profile>
        </Header>
          <ActionButtons>
          <Link href="/search" >
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />Ride</ActionButton>
              </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />2-Wheels</ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />Reserve</ActionButton>
            </ActionButtons>
          <InputButton> Where to?</InputButton>
          </ActionItems>
    </Wrapper>
  )
}
const Wrapper=tw.div`
flex flex-col h-screen
`

const ActionItems=tw.div`
flex-1 p-4

`
const Header=tw.div`
flex justify-between items-center
`

const UberLogo=tw.img`
h-28
`
const Profile=tw.div`
flex items-centre
`
const Name=tw.div`
mr-4 w-20 text-small
`
const UserImage=tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`
const ActionButtons=tw.div`
flex 
`
const ActionButton=tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify center rounded-lg transform hover:scale-105 transistion text-xl
`
const ActionButtonImage=tw.img`
h-3/5
`
const InputButton=tw.div`
flex bg-gray-200 flex-1 h-20 text-2xl p-5 item-center mt-8
`

