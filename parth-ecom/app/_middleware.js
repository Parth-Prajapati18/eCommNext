import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(req, ev) {
    
    const token = req ? req.cookies?.token : null;

    let userId = null;

    if (token) {
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    }
}