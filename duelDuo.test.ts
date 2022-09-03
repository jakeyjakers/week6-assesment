
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

     driver.sleep(3000)

test('Button get rbobts button is displayed when page loads', async () => {
    const draw = await driver.findElement(By.id('draw'))
    const isButtonThere = await draw.isDisplayed()
    expect(isButtonThere).toBe(true)
})

    driver.sleep(300)

test('checking to see if clicking the draw button fills the bottome with robot caards', async () => {
    const seeAllBots = await driver.findElement(By.id('see-all'))
    const isButtonThere = await seeAllBots.isDisplayed()
    expect(isButtonThere).toBe(true)

})

