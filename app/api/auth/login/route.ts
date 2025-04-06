

export default async function POST(request: Request) {
    // convert request to form data json and then save it in mongodb
    const { data } = await request.json();
    console.log("data", data);
    return new Response(JSON.stringify({ message: "success" }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });

}

