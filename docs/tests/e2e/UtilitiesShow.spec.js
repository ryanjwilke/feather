import { snapshot } from './utils/snapshot.js'

describe('UtilitiesShow', () => {
  it('renders correctly', async () => {
    await page.goto('http://localhost:8080/utilities/color')
    await snapshot(page, 'Utilities::Show')
  })
})
