import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

import './main.scss'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faArchway, faAd, faBrain } from '@fortawesome/free-solid-svg-icons'

library.add(faArchway, faAd, faBrain) 

dom.i2svg() 
