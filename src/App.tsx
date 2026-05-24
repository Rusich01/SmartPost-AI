import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { useUiStore } from "./storage/store-ui/use-ui-store";
import Loader from "./components/loader/loader";

const Login = lazy(() => import("./components/login/login"));
const Register = lazy(() => import("./components/register/register"));
const PostEditor = lazy(() => import("./components/post-editor/post-editor"));

const App = () => {
  const { authType, isOpenEditor } = useUiStore();

  return (
    <>
      <AnimatePresence mode="wait">
        <Suspense fallback={<Loader />}>
          {isOpenEditor ? null : authType === "signin" ? (
            <Login />
          ) : (
            <Register />
          )}
          {isOpenEditor && <PostEditor />}
        </Suspense>
      </AnimatePresence>
    </>
  );
};

export default App;
