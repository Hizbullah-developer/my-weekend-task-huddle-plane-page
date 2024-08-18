import './Top.css'

const Top = () => {
  return (
    <div className="top">
        <header className="head">
            <img src="/logo2.png" alt="" />
            <button>Try It Free</button>
        </header>
        <div className="hero">
          <div className="herofirst">
            <h1>Build The Community Your Fans Will Love</h1>
            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
            <button>Get Started For Free</button>
          </div>
          <div className="herosec">
            <img src="/hero.png" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Top