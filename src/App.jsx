import EmoticonsCard from "./components/Card"

function App() {
  return (
    <>
      <div className='bodyContainer'>
        <header>
          <div className='headerTitleDiv'>
            <h1>Vite</h1>
            <h2>Next Generation Frontend Tooling</h2>
            <h3>Get ready for a development environment that can finally catch up with you.</h3>
            <div className='buttonsDiv'>
              <button>
                Get Started
              </button>
              <button>
                Why Vite?
              </button>
              <button>
                View on Github
              </button>
            </div>
          </div>
          <div className='headerImgDiv'>
            <img src="https://vitejs.dev/logo-with-shadow.png"></img>
          </div>
        </header>
        <section className='cardsSection'>
          <EmoticonsCard icon='💡' title='Instant Server Start' content='On demand file serving over native ESM, no bundling required!'/>
          <EmoticonsCard icon='⚡️' title='Lightning Fast HMR' content='Hot Module Replacement (HMR) that stays fast regardless of app size.'/>
          <EmoticonsCard icon='🛠️' title='Rich Features' content='Out-of-the-box support for TypeScript, JSX, CSS and more.'/>
          <EmoticonsCard icon='📦' title='Optimized Build' content='Pre-configured Rollup build with multi-page and library mode support.'/>
          <EmoticonsCard icon='🔩' title='Universal Plugins' content='Rollup-superset plugin interface shared between dev and build.'/>
          <EmoticonsCard icon='🔑' title='Fully Typed APIs' content='Flexible programmatic APIs with full TypeScript typing.'/>
        </section>
      </div>
    </>
  )
}

export default App
