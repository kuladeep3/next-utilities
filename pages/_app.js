import Header from "@/components/Header";
import { queryConfig } from "@/lib/react-query";
import "@/styles/globals.css";
import { inter } from "@/utils/fonts";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Create a client
const queryClient = new QueryClient({ defaultOptions: queryConfig });

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <main className={inter.className}>
          <Header />
          <Component {...pageProps} />
        </main>
        {/* The rest of your application */}
      </HydrationBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
