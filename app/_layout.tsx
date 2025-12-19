import Loader from "@/components/Loader";
import migrations from "@/drizzle/migrations";
import "@/globals.css";
import {
  Geist_400Regular,
  Geist_600SemiBold,
  Geist_700Bold,
  useFonts,
} from "@expo-google-fonts/geist";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { openDatabaseSync, SQLiteProvider } from "expo-sqlite";
import { Suspense, useEffect } from "react";

const name = "WageCalculator-EmployerAndEmployee.db";
const expoDb = openDatabaseSync(name, { useNewConnection: true });
const db = drizzle(expoDb);

const RootLayout = () => {
  useMigrations(db, migrations);
  useDrizzleStudio(expoDb);

  const [loaded, error] = useFonts({
    Geist_400Regular,
    Geist_600SemiBold,
    Geist_700Bold,
  });

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <Suspense fallback={<Loader />}>
      <SQLiteProvider
        databaseName={name}
        options={{ useNewConnection: true }}
        useSuspense
      >
        <Stack screenOptions={{ headerShown: false }} />
      </SQLiteProvider>
    </Suspense>
  );
};

export default RootLayout;
