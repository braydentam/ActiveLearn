defmodule RoomcodesWeb.Router do
  use RoomcodesWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", RoomcodesWeb do
    pipe_through :api
  end

  pipeline :browser do
    plug :accepts, ["html"]
  end

  scope "/", RoomcodesWeb do
    pipe_through :browser
    get "/", DefaultController, :index
  end

  scope "/code", RoomcodesWeb do
    pipe_through :browser
    get "/", CodeController, :index
    post "/create-room", CodeController, :create_code
    get "/reserved-rooms", CodeController, :reserved_rooms
  end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through [:fetch_session, :protect_from_forgery]
      live_dashboard "/dashboard", metrics: RoomcodesWeb.Telemetry
    end
  end
end
