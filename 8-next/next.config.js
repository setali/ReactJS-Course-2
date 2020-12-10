const {PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER, PHASE_PRODUCTION_BUILD} = require('next/constants')

module.exports = (phase, { defaultConfig }) => {

  console.log('phase', phase)
  console.log('defaultConfig', defaultConfig)
  if (phase === PHASE_PRODUCTION_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    return {
      ...defaultConfig,
      poweredByHeader: false,
      env: {
        myName: 'Hasan'
      }
    }
  }
  else if (phase === PHASE_DEVELOPMENT_SERVER) {
    return  {
      ...defaultConfig,
      env: {
        myName: 'Ali'
      }
    }
  }


}