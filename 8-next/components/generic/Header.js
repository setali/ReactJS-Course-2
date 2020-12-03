import Image from 'next/image'

export default function Header() {
  return (
    <header>
      {/*<Image src="/logo.png" width="189px" height="36px"  style={{background: 'blueviolet'}} alt="Profile Picture" />*/}
      <img style={{background: 'blueviolet'}} src="/logo.png" alt=""/>
      <h2 style={{display: 'inline-block', marginLeft: '50px'}}>Header</h2>
    </header>
  )
}