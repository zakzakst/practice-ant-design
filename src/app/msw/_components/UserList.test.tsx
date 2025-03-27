import { render, screen, waitFor } from "@testing-library/react";
import { UserList } from "./UserList";
import { server } from "@/mocks/server";
import { http, HttpResponse } from "msw";

describe("UserList", () => {
  it("ユーザー一覧を表示できる", async () => {
    render(<UserList />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("Alice")).toBeInTheDocument();
      expect(screen.getByText("Bob")).toBeInTheDocument();
    });
  });

  it("エラー時にエラーメッセージを表示する", async () => {
    server.use(http.get("/api/users", () => HttpResponse.error()));
    render(<UserList />);
    await waitFor(() => {
      expect(screen.getByText("Failed to fetch users")).toBeInTheDocument();
    });
  });
});
