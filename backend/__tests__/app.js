const request = require('supertest')
const app = require('../app')
jest.mock('../models/page')

describe("Restful Pages", () => {
  it("Lists pages", () => {
    return request(app).get("/pages").then(res => {
      expect(res.statusCode).toBe(200)
      expect(res.body.pages[0].rivet_type).toBe('Connector 3000')
    })
  })

  it("shows a page", () => {
    return request(app).get("/pages/1").then(res => {
      expect(res.statusCode).toBe(200)
      expect(res.body.page.id).toBe(1)
    })
  })

  it("creates a page", () => {
    return request(app).post("/pages").send({
      rivet_type: "The Hammer 2.0",
      content:"BLAH BLU BLAH NLU"
    })
    .then(res => {
      const { rivet_type, content } = res.body.page

      expect(res.statusCode).toBe(201)
      expect(rivet_type).toBe("The Hammer 2.0")
      expect(content).toBe("BLAH BLU BLAH NLU")
    })
  })

  it("updates a page", () => {
    return request(app).put("/pages/1").send({
      rivet_type: "The Hammer",
      content: "BLAH BLU BLAH NLU"
    })
    .then(res => {
      const { rivet_type, content } = res.body.page

      expect(res.statusCode).toBe(200)
      expect(rivet_type).toBe("The Hammer")
      expect(content).toBe("BLAH BLU BLAH NLU")
    })
  })

  it("deletes a page", () => {
    return request(app).delete("/pages/1").then(res => {
    expect(res.statusCode).toBe(302)
    })
  })
})
