import React from 'react'

export default function Cards() {
  function Card(props) {
    return(
      <div className="mb-8 font-sans">
        <img src={props.imgSrc} alt={props.imgAlt} 
          className="rounded-xl mb-6"
        />
        <h2 className="mb-3 text-primary text-xl md:text-2xl md:mb-1.5 font-semibold leading-4">{props.title}</h2>
        <p className="text-sm md:text-base lg:text-lg font-light leading-[21px] lg:leading-relaxed">{props.sub}</p>
      </div>
    )
  }
  return(
    <div className="px-10 py-10 gap-x-16 lg:px-20 lg:grid lg:grid-cols-3 lg:py-20">
      <Card
        key={1}
        imgSrc="/card1.png"
        imgAlt="First-Aid"
        title="First-Aid"
        sub="You will notify the preferred contacts about your current location, activate live recording of your surrounding."
      />
      <Card
        key={2}
        imgSrc="/card2.png"
        imgAlt="Recover"
        title="Recover"
        sub="You will notify the preferred contacts about your current location, activate live recording of your surrounding."
      />
      <Card
        key={3}
        imgSrc="/card3.png"
        imgAlt="First-Aid"
        title="First-Aid"
        sub="You will notify the preferred contacts about your current location, activate live recording of your surrounding."
      />
    </div>
  )
}