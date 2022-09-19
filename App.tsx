import { AppProvider } from "@hooks/index";
import { Routes } from "@routes/index";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <AppProvider>
      <StatusBar translucent style="light" backgroundColor="transparent" />
      <Routes />
    </AppProvider>
  );
}
