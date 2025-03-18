export type HttpError = {
  err: { message: string };
};

export const httpError: HttpError = {
  err: { message: "internal server error" },
};
