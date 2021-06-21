import { createMocks } from "node-mocks-http"
import filtersApi from "./filters"
import filters from "../../data/filters.json"

describe("Tests for the API Endpoint: /api/filters", () => {
  it("should fetch data without params", async () => {
    const { req, res } = createMocks({
      method: "GET",
    })
    await filtersApi(req, res);
    const data = JSON.parse(res._getData())
    expect(res._getStatusCode()).toBe(200)
    expect(data).toEqual(filters)
  })
})
