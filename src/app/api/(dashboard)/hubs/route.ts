import { connect } from "@/lib/db";
import User from "@/lib/models/user.model";
import Hub from "@/lib/models/hub.model";
import { NextResponse } from "next/server";
import { Types } from "mongoose";

export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId || !Types.ObjectId.isValid(userId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing userId" }),
        {
          status: 400,
        }
      );
    }

    await connect();

    const user = await User.findById(userId);
    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: "User not found in the database" }),
        {
          status: 400,
        }
      );
    }

    const hubs = await Hub.find({
      user: new Types.ObjectId(userId),
    });

    return new NextResponse(JSON.stringify(hubs), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse("Error in fetching categories" + error.message, {
      status: 500,
    });
  }
};

export const POST = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    const { hubName,hubDescription,people, m_invest,invest_period,t_invest }  = await request.json();


    if (!userId || !Types.ObjectId.isValid(userId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing userId" }),
        {
          status: 400,
        }
      );
    }

    await connect();

    const user = await User.findById(userId);
    if (!user) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }
    const newHub = new Hub({
        hubName,
        hubDescription,
        people,
        m_invest,
        invest_period,
        t_invest,
        hubOwner: new Types.ObjectId(userId),
    });

    await newHub.save();

    return new NextResponse(
      JSON.stringify({ message: "Hub is created", hub: newHub }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in creating Hub" + error.message, {
      status: 500,
    });
  }
};