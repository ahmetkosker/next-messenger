import { NextResponse, NextRequest } from "next/server";
import { connectToMongoDB } from "../../../libs/mongodb";
import User from "@/app/models/user";
import { hash } from "bcrypt";

export async function POST(req: NextRequest) {
  const resBody = await req.json();
  connectToMongoDB()
    .then(async () => {
      const { name, email, password } = resBody.values;

      if (!name || !email || !password)
        return NextResponse.json({ error: "Data is missing" });
      else {
        const userExists = await User.findOne({ email: email });

        if (userExists) {
          return NextResponse.json({ error: "User already exists" });
        } else {
          if (password.length < 6)
            return NextResponse.json({ error: "Password too short" });

          const hashedPassword = await hash(password, 12);

          await User.create({
            name: name,
            email: email,
            password: hashedPassword,
          });

          NextResponse.json({ status: "User created" });
        }
      }
    })
    .catch((err) => NextResponse.json({ error: err.message }));
}
