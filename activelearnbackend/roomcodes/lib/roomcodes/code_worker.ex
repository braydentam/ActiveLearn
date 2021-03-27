defmodule Roomcodes.CodeWorker do
  use GenServer

  def find_avaliable_code(max, codes) do
    code = Enum.random(1..max)
    unless codes |> Enum.find(false, &(&1 == code)) do
      code
    else
      find_avaliable_code(max, codes)
    end
  end

  def handle_call(:get, _from, {:ok, state}) do
    {:reply, find_avaliable_code(state.max, state.codes), {:ok, state}}
  end

  def handle_call(:get_all, _from, {:ok, state}) do
    {:reply, state.codes, {:ok, state}}
  end

  @spec handle_cast({any, any}, any) :: {:noreply, any}
  def handle_cast({:reserve, value}, {:ok, state}) do
    {:noreply, {:ok, %{state | codes: state.codes ++ [value]}}}
  end

  def handle_cast({:release, value}, {:ok, state}) do
    {:noreply, {:ok, %{state | codes: state.codes -- [value]}}}
  end

  def handle_cast({call, value}, state) do
    IO.puts "No matching clause, Value: #{IO.inspect value}, Call: #{IO.inspect call}, State: #{IO.inspect state}}"
    {:noreply, state}
  end

  def get_new, do: GenServer.call(:codeworker, :get)
  def get_all, do: GenServer.call(:codeworker, :get_all)
  def reserve(value), do: GenServer.cast(:codeworker, {:reserve, value})
  def release(value), do: GenServer.cast(:codeworker, {:release, value})

  def create_room() do
    code = get_new()
    code |> reserve()
    code
  end


  def start_link(max \\ 10_000) do
    IO.puts "Max: #{max}, Codes #{[]}"
    GenServer.start_link(__MODULE__, {:ok, %{max: max, codes: []}}, name: :codeworker)
  end

  def init(state), do: {:ok, state}
end
