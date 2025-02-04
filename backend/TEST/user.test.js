import supertest from "supertest"
import app from "../server"
import { connect } from "../config/testDb"

describe("user signUp POST/api/user/Signup",() => {

    test("user not provide name",async () => {
        const res = await supertest(app).post("/api/user/register").send({
                "email":"himanshumakwana5634@gmail.com",
                "password":"12345678"
            })
        expect(res.body).toEqual({ success: false,message: "Please provide name",})
    })

    test("user not provide email or wrong email",async () => {
        const res = await supertest(app).post("/api/user/register").send({
                "name":"himanshu",
                "email":"",
                "password":"12345678"
            })
        expect(res.body).toEqual({ success: false,message: "Please enter a valid email",})
    })

    test("user not provide strong password",async () => {
        const res = await supertest(app).post("/api/user/register").send({
                "name":"himanshu",
                "email":"himanshumakwna5634@gmail.com",
                "password":"12345"
            })
        expect(res.body).toEqual({ success: false,message: "please enter strong password",})
    })

    test("register user",async () => {
        const res = await supertest(app).post("/api/user/register").send({
                "name":"himanshu",
                "email":"himanshumakwana5634@gmail.com",
                "password":"12345678"
            })
        expect(res.statusCode).toBe(301)
    })

    test("user already exists",async () => {
        const res = await supertest(app).post("/api/user/register").send({
                "name":"himanshu",
                "email":"himanshumakwana5634@gmail.com",
                "password":"12345678"
            })
        expect(res.body).toEqual({success:false,"message":"User already exists"})
    })

})

describe("user Login POST/api/user/login",() => {

    test("login user",async () => {
        const res = await supertest(app).post("/api/user/login").send({
                "email":"himanshumakwana5634@gmail.com",
                "password":"12345678"
            })
        expect(res.statusCode).toBe(200)
    })

    test("user not found",async () => {
        const res = await supertest(app).post("/api/user/login").send({
                "email":"himanshumakwana@gmail.com",
                "password":"12345678"
            })
        expect(res.body).toEqual({success:false,message:"Invalid credentials"})
    })

    test("invalid cradentials",async () => {
        const res = await supertest(app).post("/api/user/login").send({
                "email":"himanshumakwana@gmail.com",
                "password":"1234567"
            })
        expect(res.body).toEqual({success:false,message:"Invalid credentials"})
    })

})