import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/users", async () => {
    return HttpResponse.json(
      [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ],
      { status: 200 }
    );
  }),
];
