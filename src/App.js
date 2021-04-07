import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage } from '../src/pages/HomePage.jsx'
import { ContactPage } from '../src/pages/ContactPage.jsx'
import { StatisticPage } from './pages/StatisticPage.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { ContactDetails } from './pages/ContactDetails.jsx'
import ContactEdit from './pages/ContactEdit.jsx'
export function App() {
  return (
    <Router>
      {/* AppHeader */}
      <AppHeader/>
      <Switch>
        <Route component={ContactEdit} path='/contact/edit/:id?' />
        <Route component={ContactDetails} path='/contact/:id' />
        <Route component={ContactPage} path='/contact' />
        <Route component={StatisticPage} path='/statistic' />
        <Route component={HomePage} path='/' />
      </Switch>
      {/* AppFooter */}
      {/* <HomePage/>
        <hr/>
        <ContactPage/>
        <hr/>
        <StatisticPage/> */}
    </Router>
  )

}

{/* import React from 'react'

export default function App() {
  return (
    <div>
      
    </div>
  )
} */}
