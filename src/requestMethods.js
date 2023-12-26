import axios from "axios";

const BASE_URL = "https://e-commerce-api-fxlgun.vercel.app/api";
// const BASE_URL = "http://localhost:5000/api";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const adminRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDIyY2YzMTA3MjExODY1NDVhZGQzYiIsImlhdCI6MTY2OTI5MTIxNiwiZXhwIjoxNjY5NTUwNDE2fQ.hSD00q5nBBe92Ms57aVfswN2qLRIJ7WmeEqP_59Gy4g" }
});