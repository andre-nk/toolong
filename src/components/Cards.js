import React from 'react'

export default function Cards() {
  function Card(props) {
    return(
      <div className="mb-8 font-sans">
        <img src={props.imgSrc} alt={props.imgAlt} 
          className="rounded-xl mb-5 lg:mb-8"
        />
        <h2 className="mb-[6px] text-primary text-xl font-semibold leading-4 lg:text-[28px] lg:mb-4 lg:leading-5">{props.title}</h2>
        <p className="mb-1 text=[14px] font-light leading-[21px] text-xl lg:leading-8">{props.sub}</p>
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