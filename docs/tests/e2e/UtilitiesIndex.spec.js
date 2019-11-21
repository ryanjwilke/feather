import { snapshot } from './utils/snapshot.js'

describe('UtilitiesIndex', () => {
  it('renders correctly', async () => {
    await page.goto('http://localhost:8080/utilities/')
    await snapshot(page, 'Utilities::Index')
  })
})
