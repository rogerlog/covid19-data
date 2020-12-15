import React from 'react';
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import GlobalStyle from './commons/styles/global-styles'

function App() {
  return (
    <StylesProvider injectFirst>
<CssBaseline />
<GlobalStyle />
<div>
  Rr
</div>

    </StylesProvider>
  );
}

export default App;
