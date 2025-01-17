import { ReactHostToastProvider } from "./react-hot-toast";
import { ReactQueryProvider } from "./react-query";
import { ReactRouterProvider } from "./react-router";

export default function AppProvider() {
  return (
    <ReactQueryProvider>
      <ReactRouterProvider/>
      <ReactHostToastProvider/>
    </ReactQueryProvider>
  )
}
