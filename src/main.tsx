
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

const container = document.getElementById('root')
const queryClient = new QueryClient()

if (container) {
  const root = createRoot(container)

  root.render(
  <QueryClientProvider client={queryClient}>

    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>,

  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}