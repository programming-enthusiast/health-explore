
import { createMocks } from "node-mocks-http"
import jobs from "../../data/jobs.json"
import jobAPI from "./jobs"

describe("Tests for the API Endpoint: /api/jobs", () => {
  it("should fetch data without params", async () => {
    const { req, res } = createMocks({
      method: "GET",
    })
    await jobAPI(req, res)
    const data = JSON.parse(res._getData())
    expect(data).toEqual(jobs)
    expect(res._getStatusCode()).toBe(200)
  })

  it("should fetch data with JOB TYPE filter", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        filter: "job_type",
        filterType: "Per-Diem"
      },
    })
    await jobAPI(req, res)
    const data = JSON.parse(res._getData())[0].items[0].job_type
    expect(data).toEqual("Per-Diem")
    expect(res._getStatusCode()).toBe(200)
  })

  it("should fetch data with DEPARTMENT filter", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        filter: "department",
        filterType: encodeURIComponent("Anesthesiology & Perioperative Medicine")
      },
    })
    await jobAPI(req, res)
    const data = JSON.parse(res._getData())[0].items[0].department
    expect(data.includes("Anesthesiology & Perioperative Medicine")).toEqual(true)
    expect(res._getStatusCode()).toBe(200)
  })

  it("should fetch data with WORK SCHEDULE filter", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        filter: "work_schedule",
        filterType: "Night shift"
      },
    })
    await jobAPI(req, res)
    const data = JSON.parse(res._getData())[0].items[0].work_schedule
    expect(data).toEqual("Night shift")
    expect(res._getStatusCode()).toBe(200)
  })

  it("should fetch data with EXPERIENCE filter", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        filter: "experience",
        filterType: "Intermediate"
      },
    })
    await jobAPI(req, res)
    const data = JSON.parse(res._getData())[0].items[0].experience
    expect(data).toEqual("Intermediate")
    expect(res._getStatusCode()).toBe(200)
  })

  it("should search for Full-time JOB TYPE", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        search: "Full-time",
      },
    })
    await jobAPI(req, res)
    const data = JSON.parse(res._getData())[0].items[0].job_type
    expect(data).toEqual("Full-time")
    expect(res._getStatusCode()).toBe(200)
  })

  it("should search for any DEPARTMENT", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        search: encodeURIComponent("Anesthesiology & Perioperative Medicine"),
      },
    })
    await jobAPI(req, res)
    const data = JSON.parse(res._getData())[0].items[0].department
    expect(data.includes("Anesthesiology & Perioperative Medicine")).toEqual(true)
    expect(res._getStatusCode()).toBe(200)
  })

  it("should search for any Night shift WORK SCHEDULE", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        search: "Night shift",
      },
    })
    await jobAPI(req, res)
    const data = JSON.parse(res._getData())[0].items[0].work_schedule
    expect(data).toEqual("Night shift")
    expect(res._getStatusCode()).toBe(200)
  })

  it("should search for any Intermediate EXPERIENCE", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        search: "Intermediate",
      },
    })
    await jobAPI(req, res)
    const data = JSON.parse(res._getData())[0].items[0].experience
    expect(data).toEqual("Intermediate")
    expect(res._getStatusCode()).toBe(200)
  })
})
