import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BookingList, CabinList } from "./features";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

// http://localhost:3000/bookings/B1?_embed=guest&_embed=cabin

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BookingList />
      <CabinList />
    </QueryClientProvider>
  );
};

export default App;
