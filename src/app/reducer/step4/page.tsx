"use client";
import { useReducer } from "react";

type Errors = {
  username?: string;
  email?: string;
  password?: string;
};

type State = {
  username: string;
  email: string;
  password: string;
  errors: Errors;
  loading: boolean;
  submitted: boolean;
};

const initialState: State = {
  username: "",
  email: "",
  password: "",
  errors: {},
  loading: false,
  submitted: false,
};

type Action =
  | { type: "SET_FIELD"; field: string; value: string }
  | { type: "SET_ERRORS"; errors: Errors }
  | { type: "SET_LOADING"; loading: boolean }
  | { type: "SET_SUBMITTED"; submitted: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "SET_LOADING":
      return { ...state, loading: action.loading };
    case "SET_SUBMITTED":
      return { ...state, submitted: action.submitted };
    default:
      throw new Error("Unknown action type");
  }
};

const validate = (state: State): Errors => {
  const errors: Errors = {};
  if (!state.username) errors.username = "Username is required";
  if (!state.email) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) errors.email = "Invalid email format";
  if (!state.password) errors.password = "Password is required";
  else if (state.password.length < 6) errors.password = "Password must be at least 6 characters";
  return errors;
};

const Page = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate(state);
    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", errors });
      return;
    }

    dispatch({ type: "SET_LOADING", loading: true });

    setTimeout(() => {
      dispatch({ type: "SET_LOADING", loading: false });
      dispatch({ type: "SET_SUBMITTED", submitted: true });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={state.username} onChange={handleChange} />
          {state.errors.username && <p>{state.errors.username}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            // type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          {state.errors.email && <p>{state.errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={state.password} onChange={handleChange} />
          {state.errors.password && <p>{state.errors.password}</p>}
        </div>
        <button type="submit" disabled={state.loading}>
          {state.loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {state.submitted && <p>Form submitted successfully!</p>}
    </div>
  );
};

export default Page;
